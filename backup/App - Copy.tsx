import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from './store/store';
import { login, logout } from './store/store';
import LoginForm from './components/LoginForm';
import UserDashboard from './components/UserDashboard';
import AdminDashboard from './components/AdminDashboard';
import { CREDENTIALS } from './credentials';
import AboutUs from './components/AboutUs';
import AdminPage from './components/AdminPage';

import Layout from './components/layout/Layout';


const App: React.FC = () => {
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const role = useSelector((state: RootState) => state.auth.role);
    console.log("Current role:", role); 

    const dispatch = useAppDispatch();

    const handleLogin = (email: string, password: string) : string | null  => {
        const user = CREDENTIALS.find(
            (cred) => cred.email === email && cred.password === password
        );
        if (user) {
           dispatch(login(user.role as 'user' | 'admin'));
           return null;
        }else{
            setErrorMessage('User does not exist');
            return null;

        }

    };

 

    return (
        <Router>
            <div>

                <Routes>
                <Route path="/" element={<Layout />}>
                    {role === null  && <Route path="/login" element={<LoginForm onSubmit={handleLogin} errorMessage={errorMessage}/>} /> }
                    <Route path="/user-dashboard" element={role === 'user' ? <UserDashboard /> : <Navigate to="/login" />} />
                    <Route path="/admin-dashboard" element={role === 'admin' ? <AdminDashboard /> : <Navigate to="/login" />} />
                    <Route path="/adminpage" element={role === 'admin' ? <AdminPage /> : <Navigate to="/login" />} />
                    <Route path="/aboutus" element={role ? <AboutUs /> : <Navigate to="/login" />} />
                    <Route path="/login" element={
                        role === 'user' ? <Navigate to="/user-dashboard" /> :
                        role === 'admin' ? <Navigate to="/admin-dashboard" /> : ''
                    } />
                </Route>
                </Routes>
            </div>
        </Router>
    );
};

export default App;
