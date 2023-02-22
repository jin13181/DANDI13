/* 따로 빼서 index.js에 import하는 방법이 있을텐데 아직은 모르겠음! */
const express = require('express');
const db = require('./config/db');
const argon2 = require ('argon2'); 
const app = express();

app.use(express.json());

app.post('/register', async (req,res) => { 
    
//여기 호출 할 때마다 userid란 변수를 만들고
const id = req.body.RegisterId
const pw = req.body.RegisterPW

// console.log(req.body);
// console.log(id);
// console.log(pw); //이까지 잘 찍힘

const hash = await argon2.hash(pw); //암호화로 변경된부분
//console.log(hash); //이까지 잘 찍힘

db.query('INSERT into user (id, pw) VALUES (? ,?)',  // table명 제대로 확인!!
[id, hash], //?에 넣으려는 값
(err, result) => {
    if(result) {
        res.send("SIGN IN");
    }else {
        res.send({message: "회원가입에 실패했습니다."})
    }
});
    
});


const port = 4000;
app.listen(port, () => {
    console.log(`Node.js Server is running on port ${port}...`)
});

