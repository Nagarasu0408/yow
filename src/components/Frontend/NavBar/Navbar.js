import './Navbar.css';
import Logo from "../../Images/Login/Yow.png";

function Navbar() {
    return (
        <>
            <div className='Nav_bar'>
                <img src={Logo} alt='Logo' />
                <input type='text' placeholder='Search your Favorite...'></input>
                <div className='Nav-btn'>
                    <button>Login</button>
                    <button>Contact</button>
                </div>
            </div>
        </>
    );
}


export default Navbar;