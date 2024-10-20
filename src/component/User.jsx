import React, { useContext } from 'react'
import useronImg from '../assets/user-on.png'
import useroffImg from '../assets/user-off.png'
import '../styles/User.css'
import { AuthContext } from './Aunthentication'
import { useNavigate } from 'react-router-dom'
import removeIcon from '../assets/remove.png'
function User() {

    const { isSigned, user } = useContext(AuthContext);
    const Unknown = 'Unknown User';
    const User = user.slice(0, 3);

    const navigate = useNavigate();
    function removeUser() {
        window.location.href = '/';
    }

    return (
        <div className='user'>
            <img src={isSigned ? useronImg : useroffImg} />
            <p>{isSigned ? User : Unknown}</p>
            {isSigned && (<button onClick={removeUser} className='signout-link'><img src={removeIcon} /></button>)}

        </div>
    )
}

export default User
