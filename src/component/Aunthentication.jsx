import React, { useState, createContext } from 'react'

export const AuthContext = createContext();
function Aunthentication({ children }) {
    const [isSigned, setIsSigned] = useState(false);
    const [user, setUser] = useState('')
    return (
        <AuthContext.Provider value={{ isSigned, setIsSigned, user, setUser }}>
            {children}
        </AuthContext.Provider>
    )
}

export default Aunthentication
