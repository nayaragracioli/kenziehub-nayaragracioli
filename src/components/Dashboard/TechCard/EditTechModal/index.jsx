import { MdClose } from "react-icons/md";
import Input from "../../../forms/Input";
import Select from "../../../forms/Select";
import { useContext } from "react";
import { TechContext } from "../../../../providers/TechContext";
import { useForm } from "react-hook-form";
import Styles from "../../TechCard/style.module.scss";

export const EditTechModal = () => {
    const {setEditingTech, editingTech, techUpdate} = useContext(TechContext);
    const { register, handleSubmit, formState: { errors } } = useForm({
        values: {
            title: editingTech.title,
            status: editingTech.status,
        }
    });
    

    const submit = (payLoad) => {
        techUpdate(payLoad);
    }

    return (
        <div role="dialog" className={`${Styles.overlayBox}`}>
            <form onSubmit={handleSubmit(submit)} className={`${Styles.flexbox}`}>
                <div className={`${Styles.head}`}>
                    <h2 className="title2">Tecnologia Detalhes</h2>
                    <button onClick={()=> setEditingTech(null)} aria-label="close" title="Fechar">
                        <MdClose size={21} color="white"/>
                    </button>
                </div>
                <div className={`${Styles.input}`}>
                    <Input
                        id="techName"
                        label="Nome"
                        placeholder="Digite a tech"
                        type="text"
                        {...register("title")}
                        error={errors.techs}
                        value={editingTech.title}
                        readOnly
                    />
                </div>
                <div className={`${Styles.select}`}>
                    <Select label="Selecionar status" {...register("status")} id="status" error={errors.status}>
                    <option value="">Selecione um módulo</option>
                    <option value="Iniciante">Iniciante</option>
                    <option value="Intermediário">Intermediário</option>
                    <option value="Avançado">Avançado</option>
                    </Select>
                </div>
                <button className={`btnPrimary`} type="submit" >Salvar Alterações</button>
            </form>
        </div>
    )
}