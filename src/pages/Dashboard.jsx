import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Profile } from '../components/Profile';
import { ExtraInfoHistorial } from '../components/ExtraInfoHistorial';
//import { getRoleBasedOnToken } from '../services/api';????

export const Dashboard = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({});
    const [extraInfo, setExtraInfo] = useState([]);

    const fetchUser = async () => {
        const token = localStorage.getItem('token')

        try {
            const response = await axios.get(`http://127.0.0.1:8080/user/me`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setUserData(response.data);
            fetchExtraInfo()
        } catch {
            console.error('Error');
            return;
        }
    }

    const fetchExtraInfo = async () => {
        const token = localStorage.getItem('token')
        const response = await axios.get('http://127.0.0.1:8080/extraInfo/user?page=0&size=10', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        setExtraInfo(response.data.content);
    }

    useEffect(() => {
        fetchUser()
    }, [])

    const handleEditProfileClick = () => {
        navigate('/profile/edit')
    }

    return (
        <main className="dashboard-main">
            <div className="dashboard-div">
                <Profile userData={userData} className="dashboard-profile"/>
                {extraInfo && <ExtraInfoHistorial extraInfo={extraInfo} />}
                <button id='editProfile' onClick={handleEditProfileClick} className="dashboard-button">
                    Editar perfil
                </button>
            </div>
        </main>
    )
}