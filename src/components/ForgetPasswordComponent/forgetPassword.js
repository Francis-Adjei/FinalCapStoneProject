import React, { Component } from 'react'
import { Link } from 'react-router-dom';



 class ForgetPasswordContainer extends Component {
    render() {
        return (
            <section className='container'>
            <div className="forms-container">
              <div className="signin-signup">
               <form action="" className="sign-in-form">
                 <h2 className="title">Reset Password</h2>
                 <div className="input-field">
                     <i className="fas fa-user"></i>
                     <input type="text" placeholder="Email"/>
                 </div>
                 <div class="input-field">
                       <i className="fas fa-lock"></i>
                       <input type="password" placeholder="New Password"/>
                   </div>
                   <input type="submit" value="Reset" class="btnLogin solid"/>
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
}


export default ForgetPasswordContainer;