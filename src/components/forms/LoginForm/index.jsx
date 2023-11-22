import { useForm } from "react-hook-form";
import Input from "../Input";
import { Link, useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema } from "./loginForm.schema";
import { useState } from "react";
import { api } from "../../../services/api";
import Style from "./style.module.scss";
import { toast } from "react-toastify";


export const LoginForm = ({ setUser }) => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(loginFormSchema),
    });

    const userLogin = async (payLoad) => {
        try {
            setLoading(true);
            const { data } = await api.post("/sessions", payLoad);
            localStorage.setItem("@TOKEN", data.token);
            setUser(data.user);
            toast.success("Login feito com sucesso");
            setTimeout(() => {
                navigate("/dashboard")
            }, 2000)
                ;
        } catch (error) {
            if (error.response?.data.message === "Incorrect email / password combination") {
                toast.error("Credenciais inválidas.")
            }
        } finally {
            setLoading(false);
        }
    }

    const submit = (payLoad) => {
        userLogin(payLoad);
    }

    return (
        <form onSubmit={handleSubmit(submit)} className={Style.formbox}>
            <h1 className={`title1`}>Login</h1>
            <Input
                id="email"
                label="Email"
                placeholder="Digite aqui seu email"
                type="email"
                {...register("email")}
                error={errors.email}
            />
            <Input
                id="password"
                label="Senha"
                placeholder="Digite aqui sua senha"
                type="password"
                {...register("password")}
                error={errors.password}
            />
            <button className={`btnPrimary`} type="submit">Entrar</button>
            <p className={`headline bold`}>Ainda não possui uma conta?</p>
            <Link to="/register" className={`btnDisable`} type="submit" disabled={loading}>
                Cadastrar
            </Link>
        </form>
    )
}