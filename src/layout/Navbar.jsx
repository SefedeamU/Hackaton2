import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Navbar = () => {
    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem('token')
        navigate('/auth/login')
    }

    if (localStorage.getItem('token')) {
        return (
            <div className="bg-black h-12 text-white px-10 py-2 flex justify-between">
                <div className='text-2xl'>Uber</div>
                <button id="logout" onClick={handleLogout}>
                    Logout
                </button>
            </div>
        )
    } else {
        return (
            <div className="bg-black h-12 text-white px-10 py-2 text-2xl">
                Aplicación.org
            </div>
        )
    }
}