import React from 'react';
import { Link } from 'react-router-dom';
import image from "../../assets/francis.jpg"


const Signup = (props) => {

    return (
         <>
            <img className="background" src={image} />
            <div className="container">
                <div className="img"></div>
                <div className="login-content">
                    <form action="#">
                        <h2 className="title">Sign up</h2>
                        <div className="input-container username">
                            <div className="icons">
                                <i className="fas fa-user"></i>
                            </div>
                            <div className="input-box">
                                <input type="text" className="input" placeholder="Username" onChange={(event) => props.handleChange({"field": "username", "value": event.target.value})}/>
                            </div>
                        </div>
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
                      
                        <button onClick={props.signup_func} className="btn">SIGN UP</button>
                        <p>Already have an account
                            <Link to="/"><i class="fas fa-chevron-circle-left"> Login</i></Link>
                        </p>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Signup;