import '../../css/Header.css'
import logo from '../../images/dandi-logo.png'

function Header() {
    return (
        <div id='header'>
           <img id="logo" src={logo}/>
        </div>
    )
}

export default Header;