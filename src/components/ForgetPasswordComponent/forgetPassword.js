import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import image from "../../assets/francis.jpg"



const ForgetPassword = (props) => {

    return (
            <>
            <img className="background" src={image} />
            <div className="container">
                <div className="img"></div>
                <div className="login-content">
                    <form action="#">
                        <h2 className="title">Reset Password</h2>
                        <div className="input-container username">
                            <div className="icons">
                               <i class="fas fa-envelope"></i>
                            </div>
                            <div className="input-box">
                                <input type="text" className="input" placeholder="Email" onChange={(event) => props.handleChange({"field": "email", "value": event.target.value})} />
                            </div>
                        </div>
                        <div className="input-container password">
                            <div className="icons">
                                <i className="fas fa-lock"></i>
                            </div>
                            <div className="input-box">
                                <input type="password" className="input" placeholder="New Password" onChange={(event) => props.handleChange({"field": "password1", "value": event.target.value})} />
                            </div>
                        </div>
                        <div className="input-container password">
                            <div className="icons">
                                <i className="fas fa-lock"></i>
                            </div>
                            <div className="input-box">
                                <input type="password" className="input" placeholder="Repeat Password" onChange={(event) => props.handleChange({"field": "password2", "value": event.target.value})} />
                            </div>
                        </div>
                        <button type="button" className="btn" onClick={props.reset_func}>RESET</button>
                        <p>
                            <Link to="/"><i class="fas fa-chevron-circle-left"> Login</i></Link>
                        </p>
                    </form>
                </div>
            </div>
        </>
        )
}


export default ForgetPassword;