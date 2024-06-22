import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const EditProfile = () => {
    const navigate = useNavigate();

    const [newProfile, setNewProfile] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: ''
    });

    const handleInputChange = (event) => {
        setNewProfile({
            ...newProfile,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const token = localStorage.getItem('token');
        try {
            const response = await axios.patch('http://127.0.0.1:8080/user/me', newProfile, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setNewProfile(response.data);
            navigate('/dashboard');
        } catch (error) {
            console.error('Error updating profile', error);
        }
    };

    const handleDeleteProfile = async () => {
        const token = localStorage.getItem('token');
        try {
            await axios.delete('http://127.0.0.1:8080/user/me', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            localStorage.removeItem('token');
            navigate('/auth/login');
        } catch (error) {
            console.error('Error deleting profile', error);
        }
    };

    return (
        <main>
            <h1>Edit Profile</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="firstName">First Name:</label>
                    <input type="text" name="firstName" id="firstName" value={newProfile.firstName} onChange={handleInputChange}/>
                </div>

                <div>
                    <label htmlFor="lastName">Last Name:</label>
                    <input type="text" name="lastName" id="lastName" value={newProfile.lastName} onChange={handleInputChange}/>
                </div>

                <div>
                    <label htmlFor="phoneNumber">Phone Number:</label>
                    <input type="text" name="phoneNumber" id="phoneNumber" value={newProfile.phoneNumber} onChange={handleInputChange}/>
                </div>

                <button type="submit">Update Profile</button>
                <button type="button" onClick={handleDeleteProfile}>Delete Profile</button>
            </form>
        </main>
    );
};