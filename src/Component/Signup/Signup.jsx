import React from 'react';
import StyleSignup from '../Signup/signup.module.css'
const Signin = () => {
    return (
        <div>
            <section className={StyleSignup.signup}>
                <div className={StyleSignup.container}>
                    <h1>Sign up</h1>
                    <form action="#">
                        <label htmlFor="name">Username</label>
                        <input  id='name' type="text" placeholder='Type your username'/>
                         <label htmlFor="email">email</label>
                        <input id='email' type='email' placeholder='Type your Email'/>
                          <label htmlFor="password">Password</label>
                        <input id='password' type='password' placeholder='Type your Password'/>
                        <div className={StyleSignup.btn}>
                            <button type='submit'>Sign up</button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
}
export default Signin;