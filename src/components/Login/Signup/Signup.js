import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init'
import { createUserWithEmailAndPassword } from 'firebase/auth';

const Signup = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
    const [error,setError] = useState('');
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword , user] = useCreateUserWithEmailAndPassword(auth);

    const handleEmailBlur = event =>{
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event =>{
        setPassword (event.target.value)
    }

    const handleConfirmPassword = event =>{
        setConfirmPassword(event.target.value);
    }
    if(user){
        navigate('/shop')
    }

    const handlecreateUser = event =>{
        event.preventDefault();
        if (password !== confirmPassword){
            setError('your two passwords did not match');
            return;
        }
        if(password.length <6){
            setError('Password must be 6 characters or longer')
            return;
        }
        createUserWithEmailAndPassword(email,password)
    }

    return (
        <div className='form-continer'>
        <form onSubmit={handlecreateUser}>
        <div>
        <h2 className='form-title'>Sign Up</h2>
        <div className="input-group">
            <label htmlFor='email'>Email</label>
            <input onBlur={ handleEmailBlur } type='email' name='email' id='' required></input>
        </div>
        <div className="input-group">
            <label htmlFor='password'>Password</label>
            <input onBlur={handlePasswordBlur} type='password' name='password' id=''  required></input>

        </div>
        <div className="input-group">
            <label htmlFor='confirm-password'>Confirm-Password</label>
            <input onBlur={handleConfirmPassword } type='password' name='confirm-password' id=''  required></input>

        </div>
        <p style = {{color:'red'}}>{error}</p>
        <input className='form-submit' type="submit" value='login' />
        </div>
        </form>

        <p>Already Have an account <Link className='form-link' to ='/signup'> create an account</Link></p>
    </div>
    );
};

export default Signup;<h2>SignUp</h2>

