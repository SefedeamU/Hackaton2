import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const RegisterForm = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        phoneNumber: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Aquí iría la lógica para enviar los datos del formulario a tu API
        // Por ejemplo, podrías usar axios.post() si estás utilizando axios
        try {
            const response = await axios.post('http://127.0.0.1:8080/auth/register', formData);
            console.log('Registration successful:', response.data);
            window.localStorage.setItem('token', response.data.token);
            navigate('/dashboard');
        } catch (error) {
            console.error('Error during registration', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="firstName">First Name</label>
                <input type="text" name="firstName" id="firstName" onChange={handleChange}/>
            </div>

            <div>
                <label htmlFor="lastName">Last Name</label>
                <input type="text" name="lastName" id="lastName" onChange={handleChange}/>
            </div>

            <div>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" onChange={handleChange}/>
            </div>

            <div>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" onChange={handleChange}/>
            </div>

            <div>
                <label htmlFor="phoneNumber">Phone</label>
                <input type="phoneNumber" name="phoneNumber" id="phoneNumber" onChange={handleChange}/>
            </div>

            <button type="submit">Register</button>
        </form>
    );
};