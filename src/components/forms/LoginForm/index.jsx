import { useForm } from "react-hook-form";
import Input from "../Input";
import { Link } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema } from "./loginForm.schema";
import { useContext, useState } from "react";
import Style from "./style.module.scss";
import { UserContext } from "../../../providers/UserContext";


export const LoginForm = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: zodResolver(loginFormSchema),
    });
    
    const [loading, setLoading] = useState(false);
    const {userLogin} = useContext(UserContext);

    const submit = (payLoad) => {
        userLogin(payLoad, setLoading, reset);
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