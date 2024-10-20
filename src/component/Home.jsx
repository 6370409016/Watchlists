import React, { createContext } from 'react'
import '../styles/Home.css'
import SideNavbar from './SideNavbar'
import MainContainer from './MainContainer'
import { useLocation } from 'react-router-dom'

const passData = createContext();
function Home() {
    const data = useLocation();
    const isSigned = data.state?.isSigned || false;
    return (
        <>
            <div className='home'>
                <SideNavbar />
                <MainContainer />
            </div>
        </>

    )
}

export { passData }
export default Home

