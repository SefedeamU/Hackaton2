import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './layout/Navbar';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Dashboard } from './pages/Dashboard';
import { EditProfile } from './pages/EditProfile';


function App() {
    return (
        <>
            <Router>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Navigate to="/auth/login"/>} />
                    <Route path="/auth/login" element={<Login/>} />
                    <Route path="/auth/register" element={<Register/>} />
                    <Route path="/dashboard" element={<Dashboard/>} />
                    <Route path="/profile/edit" component={EditProfile} />
                </Routes>
            </Router>
        </>
    );
}

export default App;