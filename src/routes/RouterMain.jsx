import { Route, Routes } from "react-router-dom";
import { DashboardPage, ErrorPage, LoginPage, RegisterPage } from "../pages";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { ProtectedRoutes } from "./ProtectedRoutes";
import { PublicRoutes } from "./PublicRoutes";



export const RouterMain = () => {


    return (
        <>
            <Routes>
                <Route element={<PublicRoutes/>}>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                </Route>

                <Route path="/dashboard" element={<ProtectedRoutes />}>
                    <Route index element={<DashboardPage />} />
                </Route>
                <Route path="*" element={<ErrorPage />} />
            </Routes>
            <ToastContainer position="top-right" autoClose={2 * 1000} />
        </>
    )
}