import React, { useContext } from 'react'
import '../styles/Navbar.css'
import MyWatchLists from './MyWatchLists';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './Aunthentication';
import User from './User';

export default function SideNavbar() {
    const navigate = useNavigate();
    const { isSigned } = useContext(AuthContext);
    // console.log(isSigned);
    return (
        <>
            <div className='navbar'>
                <div className='heading'>
                    <h1>WatchLists</h1>
                    <div className='search-watchlist'>
                        <input type='text' placeholder='Search Watchlists' style={{ width: '100%' }} />
                        <button>Search</button>
                    </div>

                    <div className='home-btn'>
                        <button onClick={() => navigate('/')}>Home</button>
                    </div>
                    <h2 className='sub-heading'>My Lists</h2>
                    <div className='watchlists'>
                        {isSigned && <MyWatchLists />}
                    </div>

                </div>
                <div className='user-conatiner'>
                    <User />
                </div>

            </div>
        </>
    )
}
