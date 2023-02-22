const { db } = require ('../config/db');
const jwt = require ('jsonwebtoken');

const validUser = (req, res, next) => { //req에 쿠키값이 담겨있을거임
    //access_token이 있는지 없는지 확인
    // cookie-parcer 이용해서 access_token가져오기
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
        // 이부분!!
        next(); // 이 코드가 실행될때 다음 api가 호출 할 수 있음
    } catch (err) {
        res.status(401).send("유효한 access token이 아닙니다.")
    }
};

module.exports = {
    validUser,
};