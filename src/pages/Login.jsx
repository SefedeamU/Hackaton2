import React from 'react';
import { LoginForm } from '../components/LoginForm';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const navigate = useNavigate();

    const handleRegisterClick = () => {
        navigate('/auth/register');
    };

    return (
        <main>
            <section>
                <p>Don't have an account yet? You can register by clicking the following button:</p>
                <button onClick={handleRegisterClick}>Register here! ;)</button>
            </section>

            <article>

                <section>
                    <h1>Welcome back!</h1>
                    <p>Login to start using our app</p>
                </section>
                <LoginForm/>
            </article>
        </main>
    );
};