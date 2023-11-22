import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [techList, setTechList] = useState([]);


    useEffect(() => {
        const loadUser = async () => {
            const token = localStorage.getItem("@TOKEN");
            if (token) {
                try {
                    setLoading(true);
                    const { data } = await api.get("/profile", {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    })
                    setUser(data);
                    setTechList(data.techs);
                    navigate("/dashboard");
                } catch (error) {
                    toast.error("Algo deu errado, por favor faça login novamente.")
                    localStorage.removeItem("@TOKEN");
                } finally {
                    setLoading(false);
                }
            }
        }
        loadUser();
    }, [])

    const userLogout = () => {
        setUser(null);

        localStorage.removeItem("@TOKEN");
        toast.warn("Deslogando...")
        setTimeout(() => {
            navigate("/");
        }, 1000);
    }

    const userLogin = async (payLoad, setLoading, reset) => {
        try {
            setLoading(true);
            const { data } = await api.post("/sessions", payLoad);
            localStorage.setItem("@TOKEN", data.token);
            setUser(data.user);
            setTechList(data.user.techs);
            toast.success("Login feito com sucesso");
            reset();
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

    const userRegister = async (payLoad, setLoading) => {
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


    return (
        <UserContext.Provider value={{ loading, user, userLogout, userLogin, userRegister, techList, setTechList }}>
            {children}
        </UserContext.Provider>
    )
}