import '../../css/Mypage.css'
import Navbar from '../components/Navbar';
import { useContext, useState } from 'react';
import { AuthContext } from "../../context/Authcontext"

function Mypage() {

  const {currentUser ,logout} = useContext(AuthContext);


  const data=localStorage.getItem("user"); //로컬스토리지에 있는 값을 그대로 받아서
  const parseData=JSON.parse(data); // JSON 문자열의 구문을 JavaScript 값이나 객체로 만듦
  //console.log(parseData.id);
  const username = parseData.id;
  const userPoint = parseData.point;
  //console.log(username);

    return (
      <>
      <div id='mypage'>
         <h1>마이페이지</h1>
         <div className="mpColWrap">
          <div className="mpRowWrap">
            <div className="mplabel">이름</div>
            <div id="userName">{username}님</div>
          </div>
          <div className="mpRowWrap">
            <div className="mplabel">아이디</div>
            <div id="userId">{username}</div>
          </div>
          <div className="mpRowWrap">
            <div className="mplabel">비밀번호</div>
            <div id="pwBtn">수정</div>
          </div>
          <div className="mpRowWrap">
            <div className="mplabel">포인트</div>
            <div className="mpPointWrap">
              <div id="userPoint">{userPoint}p</div>
              <div id="userPointTxt">(100p 이상부터 사용 가능합니다.)</div>
            </div>

            <p>{currentUser ? <span onClick={logout}>Logout</span> : <span>로그인해주세요</span>}</p>

          </div>
         </div>


      </div>
      <Navbar/>
      </>
        
        
    )
}

export default Mypage;
