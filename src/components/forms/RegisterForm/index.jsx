import { useForm } from "react-hook-form";
import Input from "../Input";
import Select from "../Select";
import InputPassword from "../InputPassword";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerFormSchema } from "./registerForm.schema";
import { api } from "../../../services/api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Style from "./style.module.scss";
import { toast } from "react-toastify";


export const RegisterForm = () => {
    const [loading, setLoading] = useState(false);
    const [isHidden, setIsHidden] = useState(true);
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(registerFormSchema)
    });

    const userRegister = async (payLoad) => {
        try {
            setLoading(true);
            await api.post("/users", payLoad);
            navigate("/")
            toast.success("Cadastro feito com sucesso");
        } catch (error) {
            if (error.response?.data.message === "Email already exists") {
                toast.error("Já existe um usuário com esse e-mail!");
            }
        } finally {
            setLoading(false);
        }
    };

    const submit = (payLoad) => {
        userRegister(payLoad);
    };

    return (
        <form onSubmit={handleSubmit(submit)} className={Style.registerbox}>
            <h1 className={`title1`}>Crie sua conta</h1>
            <p className={`headline`}>Rápido e grátis, vamos nessa</p>
            <Input
                id="name"
                label="Nome"
                placeholder="Digite aqui seu nome"
                type="text"
                {...register("name")}
                error={errors.name}
            />
            <Input
                id="email"
                label="Email"
                placeholder="Digite aqui seu email"
                type="text"
                {...register("email")}
                error={errors.email}
            />
            <InputPassword
                isHidden={isHidden}
                setIsHidden={setIsHidden}
                id="password"
                label="Senha"
                placeholder="Digite aqui sua senha"
                type= {isHidden ? "password" : "text"}
                {...register("password")}
                error={errors.password}
            />

            <InputPassword
                isHidden={isHidden}
                setIsHidden={setIsHidden}
                id="password"
                label="Confirmar Senha"
                placeholder="Digite novamente sua senha"
                type= {isHidden ? "password" : "text"}
                {...register("confirmPassword")}
                error={errors.confirmPassword}
            />
            <Input
                id="bio"
                label="Bio"
                placeholder="Fale sobre você"
                type="text"
                {...register("bio")}
                error={errors.bio}
            />
            <Input
                id="contact"
                label="Contato"
                placeholder="Opção de contato"
                type="number"
                {...register("contact")}
                error={errors.contact}
            />
            <div>
                <Select label="Selecionar módulo" {...register("course_module")} id="course_module" error={errors.course_module}>
                    <option value="">Selecione um módulo</option>
                    <option value="Primeiro módulo (Introdução ao Frontend)">Primeiro módulo (Introdução ao Frontend)</option>
                    <option value="Segundo módulo (Frontend Avançado)">Segundo módulo (Frontend Avançado)</option>
                    <option value="Terceiro módulo (Introdução ao Backend)">Terceiro módulo (Introdução ao Backend)</option>
                    <option value="Quarto módulo (Backend Avançado)">Quarto módulo (Backend Avançado)</option>
                </Select>
            </div>
            <div>
                <button className={`title2 btnNegative`} type="submit" disabled={loading}>Cadastrar</button>
            </div>
            
        </form>
    )
}