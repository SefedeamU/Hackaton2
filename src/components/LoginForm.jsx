import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const LoginForm = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
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
            const response = await axios.post('http://127.0.0.1:8080/auth/login', formData);
            const token = response.data.token;
            localStorage.setItem('token', token);
            console.log('Token almacenado:', token);
            navigate('/dashboard');
        } catch (error) {
            console.error('Error durante el inicio de sesión', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="email" onChange={handleChange}/>
            </div>

            <div>
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" id="password" onChange={handleChange}/>
            </div>

            <div>
                <button type="submit">Log-In</button>
            </div>


        </form>
    );
};