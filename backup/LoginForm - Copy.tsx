import React, { useState } from 'react';
import '../css/LoginForm.css';

interface LoginFormProps {
    onSubmit: (email: string, password: string) => string | null;
    errorMessage: string | null; //  errorMessage prop
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit, errorMessage}) => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('');


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email || !password) {
            setError('Invalide Username/Password.'); // Set error message
            return;
        }
        onSubmit(email, password);
    };

    return (
        <form className="login-form" onSubmit={handleSubmit}>
            <h2>Login</h2>
            { (error || errorMessage)  && <p className="error-message">{error || errorMessage}</p>}

            <label htmlFor="email">Email:</label>
            <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />

            <label htmlFor="password">Password:</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />

            <button type="submit">Login</button>
</form>
 );
};

export default LoginForm;
