import React from "react";
import { Link, useNavigate } from "react-router-dom";
// import Signup from "./signup";

const Nav = ()=>{
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();
    const logout =()=>{
        localStorage.clear();
        navigate('/signup');
    }
    return(
        <div>
            <img className="logo" src="https://media.istockphoto.com/id/1679733776/photo/closeup-image-of-judge-gavel-and-text-product-liability.jpg?s=1024x1024&w=is&k=20&c=0XLOR1T9ZUrTXWdSgbwFJHctranbQ4sLpZhkfg9Y8mk=" alt="" />
            {auth? <ul className="nav-ul">
                <li><Link to="/">Products</Link></li>
                <li><Link to="/add">Add Products</Link></li>
                <li><Link to="/update">Update Products</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link onClick={logout} to="/signup">LogOut ({JSON.parse(auth).name})</Link></li>
                </ul>
                : 
                <ul className="nav-ul nav-right" >
                    <li><Link to="/signup">SignUp</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            }
        </div>
    )
}

export default Nav;