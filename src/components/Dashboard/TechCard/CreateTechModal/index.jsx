import { MdClose } from "react-icons/md";
import Input from "../../../forms/Input";
import Select from "../../../forms/Select";
import { useContext } from "react";
import { TechContext } from "../../../../providers/TechContext";
import { useForm } from "react-hook-form";
import Styles from "../../TechCard/style.module.scss";
import { zodResolver } from "@hookform/resolvers/zod";
import { createTechModalSchema } from "./createTechModal.schema";


export const CreateTechModal = () => {
    const { register, handleSubmit, formState: { errors }} = useForm({
        resolver: zodResolver(createTechModalSchema)
    });
    const {setIsVisibleCreate, techCreate} = useContext(TechContext);
  

    const submit = (payLoad) => {
        techCreate(payLoad);
        setIsVisibleCreate(false);
    }

    return (
        <div role="dialog" className={`${Styles.overlayBox}`}>
            <form onSubmit={handleSubmit(submit)} className={`${Styles.flexbox}`}>
                <div className={`${Styles.head}`}>
                    <h2 className="title2">Cadastrar Tecnologia</h2>
                    <button onClick={()=> setIsVisibleCreate(false)} aria-label="close" title="Fechar">
                        <MdClose size={21} color="white"/>
                    </button>
                </div>
                <div className={`${Styles.input}`}>
                    <Input
                        id="title"
                        label="Nome"
                        placeholder="Digite a tech"
                        type="text"
                        {...register("title")}
                        error={errors.title}
                    />
                </div>
                <div className={`${Styles.select}`}>
                    <Select label="Selecionar status"  id="status" {...register("status")} error={errors.status}>
                    <option value="">Selecione um módulo</option>
                    <option value="Iniciante">Iniciante</option>
                    <option value="Intermediário">Intermediário</option>
                    <option value="Avançado">Avançado</option>
                    </Select>
                </div>
                <button className={`btnPrimary`} type="submit">Cadastrar Tecnologia</button>
            </form>
        </div>
    )
}

 