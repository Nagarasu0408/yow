
import "./Login.css";
import Logo from "../../Images/Yow.png";
import Chef from "../../Images/chef.png";
import BD from "../../Images/bottom.png";
import TD from "../../Images/top.png";
import Food from "../../Images/food.png";


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