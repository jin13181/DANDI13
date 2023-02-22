import '../../css/Register.css'
import { React, useState} from "react";
import {useNavigate} from 'react-router-dom'
import axios from "axios";

function Register() {
    // useState
    // 랜더가 되는 상태 값들을 저장해뒀다가 지우기도하고 그럴때 사용

    const [err, setError] = useState(null);

    const navigate = useNavigate();

    // 초기값 세팅
    const [userName, setUserid] = useState('');
    const [password, setPassword] = useState('');
    const [pwConfirm, setPwConfirm] = useState('');
    const [registerStatus, setRegisterStatus] = useState('');

    // 오류메세지 상태 저장
    const [idMessage, setIdMessage] = useState("");
    const [pwMessage, setPwMsg] = useState("");
    const [pwConfirmMsg, setPwConfirmMsg] =useState("");

    // 유효성검사
    const onChangeId = async (e) => {
        const userName = e.target.value; //폼에 입력한 값을 변수에 담아
        setUserid(userName); //변수를 useState함수에 담아
        const idRegExp = /^[a-zA-z0-9]{4,10}$/;
        if (!idRegExp.test(userName)) {
            setIdMessage("4-12 사이 대소문자 또는 숫자만 입력해주세요!");
        } else {
            try {
                const result = await axios.get(`http://localhost:8080/api/members?id=${userName}`);
                console.log(result.data.length)
                if(result.data.length) {
                    setIdMessage("중복 아이디 입니다.");
                }else{
                    setIdMessage("사용가능한 아이디 입니다.");
                }

            }catch(err) {
                console.log(err);
            }
            
        }
    };

    const onChangePw = (e) => {
        const password = e.target.value;
        setPassword(password);
        const pwRegExp =
          /^(?=.*[a-zA-Z])(?=.*[0-9]).{6,20}$/;
        if (!pwRegExp.test(password)) {
          setPwMsg(
            "숫자+영문자 조합으로 6자리 이상 입력해주세요!"
          );
        } else {
          setPwMsg(" ");
        }
      };

    const onChangePwConfirm = (e) => {
      const pwConfirm = e.target.value;
      setPwConfirm(pwConfirm);
      if (password !== pwConfirm) {
        setPwConfirmMsg("비밀번호가 일치하지 않습니다.");
      } else {
        setPwConfirmMsg(" ");
      }
    };


    //회원가입버튼을 눌렀을때 실행되는 함수
    const register = async (e) => {
        e.preventDefault();
        try{
            await axios.post('http://localhost:8080/api/auth/register',{
                id:userName,
                pass:password,
            })
            navigate("/login");
        }catch(err) {
            setError(err.response.data);
        }
    }

    return(
        <div id="register">
            <div className="registerForm">
                <form>
                    <h4>회원가입</h4>
                    <div id="idWrap">
                        <input 
                            className="textInput" 
                            type="text" 
                            name="userId" 
                            onChange={onChangeId}
                            placeholder="아이디는 6-14자 이내로 생성" required />
                        <span className="message"> {idMessage} </span>
                    </div>
                    
                    <div id="pwWrap">
                    <input 
                        className="textInput" 
                        type="password" 
                        name="password" 
                        onChange={onChangePw} 
                        placeholder="비밀번호는 6-20자 · 대문자 · 기호를 포함" required/> 
                        <span className="message"> {pwMessage} </span>
                    </div>
                    
                    <div id="pwCfWrap">
                    <div id="pwCfTitle">비밀번호 확인<span> *</span></div>
                    <input 
                        className="textInput" 
                        type="password" 
                        name="pwConfirm" 
                        value={pwConfirm}
                        onChange={onChangePwConfirm} 
                        placeholder="비밀번호를 한번 더 입력하세요." required/>
                        <span className="message"> {pwConfirmMsg} </span>
                    </div>
                    
                    <div id="Btn">
                        <div id="cancelBtn" onClick={() => navigate("/")}>
                            취소
                        </div>
                        <div 
                            id="registerBtn" 
                            type="submit" 
                            onClick={register} >가입하기</div>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Register;