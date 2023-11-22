import { Route, Routes, useNavigate } from "react-router-dom";
import { DashboardPage, ErrorPage, LoginPage, RegisterPage } from "../pages";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const RouterMain = () => {
    const [user, setUser] = useState(null);

    const navigate = useNavigate();

    const userLogout = () => {
        setUser(null);
        navigate("/");
        localStorage.removeItem("@TOKEN");
    }

    return (
        <>
            <Routes>
                <Route path="/" element={<LoginPage setUser={setUser} />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/dashboard" element={<DashboardPage user={user} userLogout={userLogout} />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
            <ToastContainer position="top-right" autoClose={2 * 1000} />
        </>
    )
}