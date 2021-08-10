import React from 'react';
import { Link } from 'react-router-dom';

const Login = (props) => {

    return (

        <section className='container'>
            <div className="forms-container">
                <div className="signin-signup">
                    <form action="" className="sign-in-form">
                        <h2 className="title">Sign in</h2>
                        <div className="input-field">
                            <i className="fas fa-user"></i>
                            <input type="text" placeholder="Username" />
                        </div>
                        <div class="input-field">
                            <i className="fas fa-lock"></i>
                            <input type="password" placeholder="Password" />
                        </div>
                        <p className="social-text">
                            <Link to='/forget-password'>forgot password</Link>
                        </p>
                        <input type="submit" value="Login" class="btnLogin solid" />
                        <div className="social-media">
                            <Link to='' class="social-icon">
                                <i class="fab fa-facebook-f"></i>
                            </Link>
                            <Link to='https://github.com/Francis-Adjei/CapstoneProject' className="social-icon">
                                <i class="fab fa-github"></i>
                            </Link>
                            <Link to='https://google.com' className="social-icon">
                                <i class="fab fa-google"></i>
                            </Link>
                            <Link to='https://www.linkedin.com/in/adjei-francis-91a40016b/' className="social-icon">
                                <i class="fab fa-linkedin-in"></i>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Login;