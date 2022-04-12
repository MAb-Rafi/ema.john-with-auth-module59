import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css';

const Ligin = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const navigate = useNavigate()

const handleEmailBlur = event =>{
    setEmail (event.target.value);
}

const handlePasswordBlur = event =>{
    setPassword(event.target.value);
}
if (user){
    navigate('/shop')
}
    const handleUserSignIn = event =>{
        event.preventDefault();
        signInWithEmailAndPassword(email,password);
    }
    return (
        <div className='form-continer'>
            <form onSubmit={handleUserSignIn}>
            <div>
            <h2 className='form-title'>login</h2>
            <div className="input-group">
                <label htmlFor='email'>Email</label>
                <input onBlur={handleEmailBlur} type='email' name='email' id='' required></input>
            </div>
            <div className="input-group">
                <label htmlFor='password'>Password</label>
                <input type='password' name='password' id='' required></input>

            </div>
            <p style={{color:'red '}}>{error?.message}</p>
            {
                loading && <p>Loading.........</p>
            }
            <input onBlur={handlePasswordBlur} className='form-submit' type="submit" value='login' />
            </div>
            </form>

            <p>new to ema-jhon? <Link className='form-link' to ='/signup'> create an account</Link></p>
        </div>
    );
};

export default Ligin;