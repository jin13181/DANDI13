import '../../css/Login.css'
import React, { useState, useContext} from 'react';
import  Axios  from 'axios';
import id from '../../images/id.png'
import pw from '../../images/pw.png'
import {Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/Authcontext';

function Login() {
   const [inputs, setInputs] = useState ({
    id:"",
    pass:"",
   })
    
   const handleChange = e => {
    setInputs(prev => ({...prev, [e.target.name]: e.target.value}))
   }

    const navigate = useNavigate();
    
    const {login} = useContext(AuthContext);

    //로그인버튼클릭햇을때
    const Login = async (e) => {
        console.log(inputs);

        e.preventDefault();
     try {
        await login(inputs);
        navigate("/home");
     } catch(err) {
        console.log(err);
       }}
       

    return(
        <div id="login">
            <h2>LOG IN</h2>
            <div>
                <div className="LoginInput" ><img className="loginIcon"src={id}/><input type='text' name='id' 
                 onChange={handleChange} placeholder="아이디" /></div>
            </div>
            <div>
            
            <div className="LoginInput"><img className="loginIcon"src={pw}/><input type='password' name='pass' 
                 onChange={handleChange}  placeholder="비밀번호" /></div>
            </div>
        
            <div type='button' id="LoginBtn" onClick={Login}>로그인</div>
            <div id="loginTxt">아이디/비밀번호 찾기 <span><Link to="/register">회원가입</Link></span></div>
        
        </div>
    )
}

export default Login;