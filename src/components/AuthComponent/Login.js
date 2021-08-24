import React from 'react';
import { Link } from 'react-router-dom';
import image from "../../assets/francis.jpg"

const Login = (props) => {

    return (
         <>
            <img className="background" src={image} />
            <div className="container">
                <div className="img"></div>
                <div className="login-content">
                    <form action="#">
                        <h2 className="title">Sign in</h2>
                        <div className="input-container username">
                            <div className="icons">
                                <i class="fas fa-envelope"></i>
                            </div>
                            <div className="input-box">
                                <input type="text" className="input" placeholder="Email" onChange={(event) => props.handleChange({"field": "email", "value": event.target.value})}/>
                            </div>
                        </div>
                        <div className="input-container password">
                            <div className="icons">
                                <i className="fas fa-lock"></i>
                            </div>
                            <div className="input-box">
                                <input type="password" className="input" placeholder="Password" onChange={(event) => props.handleChange({"field": "password", "value": event.target.value})} />
                            </div>
                        </div>
                        <Link to='/forget-password'>forgot password?</Link>
                        <button  onClick={props.login_func} className="btn">LOGIN</button>
                        <p>Don't have an account?
                            <Link to="/sign-up"><i class="fas fa-chevron-circle-right"> Sign up</i></Link>
                        </p>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login;