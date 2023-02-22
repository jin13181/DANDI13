import '../../css/Navbar.css';
import {NavLink } from 'react-router-dom';
import home from '../../images/home.svg'
import map from '../../images/road-map.svg'
import qr from '../../images/qr-scan.svg'
import stamp from '../../images/stamp.png'
import mypage from '../../images/menu.svg'


function Navbar() {

    const androidClick = () => {
        window.HybridApp.QR_Btn();
    }

    return (
            <nav id='bottom-tab'>
                <NavLink to="/home" className="tab-home"><img id="tabIcon"  src ={home}></img></NavLink>
                <NavLink to="/map" className="tab-map"  ><img id="tabIcon" src={map}></img></NavLink>
                <NavLink to="/qr" className="tab-qr" onClick={androidClick}><img id="tabIcon" src={qr}></img></NavLink>
                <NavLink to="/stamp" className="tab-stamp"  ><img id="tabIcon" src={stamp} ></img></NavLink>
                <NavLink to="/mypage" className="tab-mypage"  ><img id="tabIcon" src={mypage}></img></NavLink>
            </nav>
    )
}

export default Navbar;
