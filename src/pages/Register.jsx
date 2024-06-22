import React from 'react';
import { RegisterForm } from '../components/RegisterForm';
import {useNavigate} from "react-router-dom";

export const Register = () => {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/auth/login');
    };

    return (
        <main>
            <section>
                <p>Already have an account? You can Log-In by clicking the following button:</p>
                <button onClick={handleLoginClick}>Login here! ;)</button>
            </section>

            <article>
                <section>
                    <h1>Welcome!</h1>
                    <p>Register to start using our app</p>
                    <RegisterForm />

                </section>
            </article>
        </main>
    );
};