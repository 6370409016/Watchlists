import React, { useContext, useState } from 'react'
import '../styles/Signin.css'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from './Aunthentication';

function SignIn() {
    const [mail, setMail] = useState('');
    const [isValid, setIsValid] = useState(true);
    const navigate = useNavigate();

    const { setIsSigned } = useContext(AuthContext);
    const { setUser } = useContext(AuthContext);

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

            const fetchMail = JSON.parse(localStorage.getItem('authentication'));
            if (fetchMail === mail) {
                alert('You are now signed In');
                setMail('');
                setIsSigned(true);
                setUser(mail);
                setTimeout(() => {
                    navigate('/');
                }, 1000);
            } else {
                alert('Enter Wrong Mail Id');
            }

        } else {
            alert('Please enter a valid email.');
        }
    }

    return (
        <>
            <div className='signin-page'>
                <div className='signin-container'>
                    <div className='signin-heading'>
                        <h1>Sign In</h1>
                    </div>
                    <form className='signin-details' onSubmit={handleSubmit}>
                        <label>Enter your Mail:</label>
                        <input
                            placeholder='Enter Your Mail'
                            type="email"
                            value={mail}
                            onChange={handleMail}
                        />
                        {!isValid && <p>Invalid email format</p>}
                        <button>Submit</button>
                        <div className='signUp-details'>
                            <p>You don't have an account? </p>
                            <Link to='/signup' className='signUp-link'>SignUp</Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default SignIn
