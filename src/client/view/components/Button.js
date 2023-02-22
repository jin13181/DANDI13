import React,{useState} from 'react';
import daegu from '../../images/daegu.svg'
import logo from '../../images/dandi-logo2.png'
import '../../css/Button.css'
  
const FloatingButton = () => {
    const [modalDandi, setModalDandi] = useState(false);
    const toggleModalDandi = () => {
        setModalDandi(!modalDandi)
    }    

    const [modalInfo, setModalInfo] = useState(false);
    const toggleModalInfo = () => {
        setModalInfo(!modalInfo)
    }   

const [isOpen, setMenu] = useState(false);  // 메뉴의 초기값을 false로 설정

const toggleMenu = () => {
      setMenu(isOpen => !isOpen); // on,off 개념 boolean
  }

  return(
      <div className="floatingBtn">
        <ul className={isOpen ? "show-menu" : "hide-menu"}> 
            <li ><div className='list' onClick={toggleModalDandi}>Dandi란?</div></li>
            <li ><div className='list'  onClick={toggleModalInfo}>이용안내</div></li>
        </ul>
            <img id="fabPic" src={daegu} onClick={()=>toggleMenu()}/>      


             {modalDandi && (
            <div className="homeModal" >
                <div className="homeModalOverlay"></div>
                <div className="modal-content-dandi">     
                    <div id="homeModalDandiTitle" ><img  src={logo}></img></div>
                    <p className="homeModalTxt">단디는 '제대로, 똑바로'의 경상 방언으로<br/>
                    대구 투어를 제대로 해보자!는 의미입니다.</p>
                    <p className="homeModalTxt">스페인어로 멋쟁이란 뜻의 'Dandi' 와<br/>
                    함께 대구 관광하는 멋쟁이가 되어봅시다!</p>
                    <p className="homeModalTxt">모은 포인트로 맛집 할인 받고,<br/>
                    대구 행복페이로 교환해 사용하세요!</p>
                    <div className='closemodal' onClick={toggleModalDandi}>닫기</div>
                </div>
                </div>

            )}       

            {modalInfo && (
            <div className="homeModal" >
                <div className="homeModalOverlay"></div>
                <div className="modal-content-dandi">    
                    <h2 id="homeModalInfoTitle">이용안내</h2> 
                    <p className="homeModalTxt">Dandi 로그인 후 대구 명소에 숨겨진<br/>
                    QR코드를 찾아 찍어주세요!</p>
                    <p className="homeModalTxt">QR코드 속 스탬프를 찾아 모두 찍어 <br/>
                    포인트를 모아보세요!</p>
                    <p className="homeModalTxt">쌓은 포인트로 맛집할인, 지역화폐 등으로<br/>
                    교환하여 더욱 즐거운 여행이 되도록<br/>
                    더욱 단디하겠습니다!</p>
                    <div className='closemodal' id="closeModal2" onClick={toggleModalInfo}>닫기</div>
                </div>
                </div>

            )}               
      </div>




  )

}

export default FloatingButton;