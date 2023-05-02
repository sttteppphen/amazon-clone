import React, { useState} from 'react';
import './Login.css';
import { Link, useHistory } from "react-router-dom";
import { auth } from './firebase';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signIn = e => {
           e.preventDefault();
           //firebase login

           auth
              .signInWithEmailAndPassword(email, password)
              .then(auth => {
                   history.push('/')
           })
               .catch(error => alert(error.message))
    }
    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // it successfully created a new user with email and password
                console.log(auth)
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))

        //firebase register
    }

  return (
    <div className='login'>
        <Link to='/'>
        <img
            className="login_logo"
            src='https://th.bing.com/th?id=OIP.YdkQGmhB9c2Sr84FeDD9egHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2' />
        </Link> 

        <div className='login_container'>
           <h1>Sign-in</h1>
           <form>
               <h5> E-mail</h5>
               <input type='text' value={email} onChange={ e =>setEmail(e.target.value)} />
                <h5>Password</h5>
               <input type='password' value={password} onChange={ e =>setPassword(e.target.value)} />

                <button type='submit' onClick={signIn}
                className='login_signInButton'>Sign In
                </button>
            </form>
            <p>
                By signing-in you agree to Amazon Clone's
                Condition of Use & Sale. Please
                see our Privacy Notice, our Cookies Notice 
                and our Interest-Based Ads Notice.  
             </p>    

             <button onClick={register} className='login_registerButton'>Create your Amazon Account</button>
        </div>    
    </div>
  )
}

export default Login