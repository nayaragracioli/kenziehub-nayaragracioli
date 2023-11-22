import { createContext, useContext, useState } from "react";
import { api } from "../services/api";
import { toast } from "react-toastify";
import { UserContext } from "./UserContext";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
    const { techList, setTechList, user } = useContext(UserContext);

    const [isVisibleCreate, setIsVisibleCreate] = useState(false);
    
    const [isVisibleEdit, setIsVisibleEdit] = useState(false);

    const [editingTech, setEditingTech] = useState(null);
    
    const techCreate = async (payLoad) => {
        try {
            const token = localStorage.getItem("@TOKEN");
            const { data } = await api.post("/users/techs", payLoad, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setTechList([...techList, data]);
        } catch (error) {
            if (error.response.status === 401) {
                toast.error("Esta tecnologia já foi cadastrada!");
            }
        }
    }


    const techUpdate = async (payLoad) => {
        try {
            const token = localStorage.getItem("@TOKEN");
            const { data } = await api.put(`/users/techs/${editingTech.id}`, payLoad, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            const newTechList = techList.map(tech => {
                if (tech.id === editingTech.id) {
                    return data;
                } else {
                    return tech;
                }
            })
            toast.success("Atualização realizada com sucesso!")
            setTechList(newTechList);
            setEditingTech(null);
        } catch (error) {
            toast.error("Algo deu errado...");
        }
    }

    const techDelete = async (deletingId) => {
        try {
            const token = localStorage.getItem("@TOKEN");
            await api.delete(`/users/techs/${deletingId}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const newPostTech = techList.filter(tech => tech.id !== deletingId);
            setTechList(newPostTech);

            toast.success("Exlusão realizada com sucesso!")
        } catch (error) {
            toast.error("Algo deu errado...");
        }
    }

    // console.log(user.techs);
    return (
        <TechContext.Provider
            value={{
                isVisibleCreate,
                setIsVisibleCreate,
                isVisibleEdit,
                setIsVisibleEdit,
                techCreate,
                techList,
                editingTech,
                setEditingTech,
                techUpdate,
                techDelete
            }}>
            {children}
        </TechContext.Provider>
    )
}


