/* 따로 빼서 index.js에 import하는 방법이 있을텐데 아직은 모르겠음! */
const express = require ("express");
const argon2 = require ('argon2'); 
const jwt = require ('jsonwebtoken');
const db = require('./config/db');
const cookieParser = require('cookie-parser');
const { validUser } = require('./middleware/auth')

const app = express();

app.use(express.json());
app.use(cookieParser()); // cookie-parcer 이용해서 access_token가져올때쓰려고
app.use(express.urlencoded({ extended: false})); // 왜썼지..?


/* auth api를 함수로 뺄거 빼고 정리해보자 => auth.js에 빼둠 */
/* 이부분 사용법 다시 생각해보기 */
app.get('/auth_user',(req, res) => { // 두번째 인자로 미들웨어 추가 
    const {access_token} = req.cookies;
    if(!access_token) {
        res.status(401).send('access token이 없습니다.');
    }
    try{
        // 이 토큰이 인증된 사용자인지 조건을 걸어줌
        // 이 토큰엔 id가 담겨있음 이게 DB에 있는것과 일치하는지 여부판단
        const decoded = jwt.verify(access_token, 'secure');
        console.log(decoded); // 토큰 암호화 해제 제대로 됐는지 찍어봄 
        const {id} = jwt.verify(access_token, 'secure'); //아이디만 뽑아오는건가봄..? 
        const userInfo = db.find((data) => data.id === id); // DB에 같은 id가 있는지 확인
        console.log(userInfo); //같은 id의 사용자 정보 모두(pw도 불러온다는뜻) 불러옴
        if (!userInfo) {
           throw 'user info가 없습니다.'; //140줄이랑 같은 에러긴함. try catch로 예외처리해준 값 때문에 두번씀(?
        }
    } catch (err) {
        res.status(401).send("유효한 access token이 아닙니다.")
    }
});


/* 로그인 api _ 비밀번호 암호화 + error코드 + jwt */
app.post('/login', async (req,res) => { //암호화된 pw와 입력한 값은 당연히 다르겠지. 그래서 입력한 값도 암호화해야함
  
    const id = req.body.LoginId;
    const pw = req.body.LoginPw;

    console.log(req.body); //여기까지 잘 찍힘
    console.log(req.body.LoginId);// 여기까지 잘 찍힘

    db.query(`SELECT * FROM user WHERE id ="${id}"`, async (err, data) => {
        if (err) {
            return res.status(500).send("Error retrieving data from database.");
        }
        //return res.json(data);
        if(data.length == 0) { //DB에 값이 없다
            res.status(403) //사용자가 잘못했다는 오류 코드
            // 에러코드가 있고 없고 차이는 걸러주는? 그런용도
            // 나중에 try, catch코드를 쓰게되면 거기서 잡힌다 (뭔말임..)
            .send ('해당하는 id가 없습니다.'); // chaining기법으로 res생략가능
            return ;
        }
        console.log(data[0].pw);

         if(!(await argon2.verify(data[0].pw, pw))) { //선택된 유저의 DB pw와 입력한 pw가 다르다면
             res.status(403).send('패스워드가 틀립니다.'); //사용자가 잘못했다는 오류 코드
             return;
         }

         //토큰은 로그인이 성공했을 때 발급 해야함
        const access_token = jwt.sign({id},'secure');
        //console.log(access_token); // 제대로 발급됐나 찍어보는 용도
        // 발급 받은 토큰을 client에게 넘겨줘야함
        // 방법은 2가지 있음. 쿠키에 담거나 , response에 담거나
        // 방법1. cookie에 담기
        res.cookie('access_token', access_token, { // 쿠키에 찍힌값은 postman으로 확인가능
            httpOnly: true, // 서버와 통신할 때만 담아서 보낼 수 있고, 클라이언트에서 이 토큰을 열어서 뭔가 할 수 없게 하는 옵션 => 보안상 이유로 설정
        }); 
        res.send("로그인 성공");
        });
     });

const port = 4000;
app.listen(port, () => {
    console.log(`Node.js Server is running on port ${port}...`)
});
