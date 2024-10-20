import React, { useState } from 'react';
import '../styles/Signup.css';
import { Link } from 'react-router-dom';

function SignUp() {
    const [mail, setMail] = useState('');
    const [isValid, setIsValid] = useState(true);

    function handleMail(e) {
        const email = e.target.value;
        const emailRegex = /^[a-zA-Z0-9]{3,}@[a-zA-Z]+\.[a-zA-Z]{2,}$/;

        if (email !== '') {
            setMail(email);
            setIsValid(emailRegex.test(email));
        } else {
            setMail('');
            setIsValid(false);
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (isValid && mail !== '') {
            localStorage.setItem('authentication', JSON.stringify(mail));
            alert('You are now signed up');
            setMail('');
        } else {
            alert('Please enter a valid email.');
        }
    }

    return (
        <div className='signup-page'>
            <div className='signup-container'>
                <div className='signup-heading'>
                    <h1>Sign Up</h1>
                </div>
                <form className='signup-details' onSubmit={handleSubmit}>
                    <label>Enter your Mail:</label>
                    <input
                        placeholder='Enter Your Mail'
                        type="email"
                        value={mail}
                        onChange={handleMail}
                    />
                    {!isValid && <p className='error'>Invalid email format</p>}
                    <button type='submit'>Submit</button>
                    <div className='signIn-details'>
                        <p>Already signed up? </p>
                        <Link to='/signin' className='signIn-link'>Sign In</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignUp;
