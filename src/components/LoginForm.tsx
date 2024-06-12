import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../store/store';
import { login } from '../store/store';
import { CREDENTIALS } from '../credentials';
import '../css/LoginForm.css';


const LoginForm: React.FC = () => {
    
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('');

    const role = useSelector((state: RootState) => state.auth.role);
    console.log("Current role:", role); 
    const dispatch = useAppDispatch();

    const handleSubmit = (e: React.FormEvent) => {

        e.preventDefault();

        if (!email || !password) {
            setError('Invalide Username/Password.'); 
            return;
        }

        const user = CREDENTIALS.find(
            (cred) => cred.email === email && cred.password === password
        );

        if (user) {
           dispatch(login(user.role as 'user' | 'admin'));
        }else{
            setError('User does not exist');
        }
        
    };


    return (
        <form className="login-form" onSubmit={handleSubmit}>
            <h2>Login</h2>
            { error  && <p className="error-message">{error}</p>}

            <label htmlFor="email">Email:</label>
            <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />

            <label htmlFor="password">Password:</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />

            <button type="submit">Login</button>
</form>
 );
};

export default LoginForm;
