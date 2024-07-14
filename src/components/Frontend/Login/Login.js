
import "./Login.css";
import Logo from "../../Images/Login/Yow.png";
import Chef from "../../Images/Login/chef.png";
import BD from "../../Images/Login/bottom.png";
import TD from "../../Images/Login/top.png";
import Food from "../../Images/Login/food.png";


function Login() {
    return (
        <>
            <div >
                <img className="Logo" src={Logo} alt="Logo" />
                <img className="Chef" src={Chef} alt="chef" />
                <img className="Bottom" src={BD} alt="Bottom" />
                <img className="Top" src={TD} alt="Top" />
                <img className="Food" src={Food} alt="Food" />
            </div>
            <div className="Login">
                <div className="LoginForm">
                    <h1>Login</h1>
                    <input type="email/text" placeholder="Username or Email" />
                    <input type="password" placeholder="Password" />
                    <button type="submit" >Login</button>
                </div>
            </div>
        </>
    );
}

export default Login;