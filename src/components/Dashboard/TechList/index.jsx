import { useContext } from "react";
import { TechContext } from "../../../providers/TechContext";
import {MdEdit, MdDelete} from "react-icons/md";
import Style from "./style.module.scss";

export const TechList = () => {
    const {techList, setEditingTech, setIsVisibleEdit, techDelete} = useContext(TechContext);

    return (
        <>
            {techList.length > 0 ?
                <ul className={Style.techListbox}>
                    {techList.map((tech) => (
                        <li key={tech.id}>
                            <div>
                                <div className={`${Style.tech__title}`}>
                                    <h3 className="title2">{tech.title}</h3>
                                    <p className="headline">{tech.status}</p>
                                </div>
                                <div className={`${Style.tech__img}`}>
                                    <button onClick={() => {setIsVisibleEdit(true); setEditingTech(tech)}}  aria-label="edit"><MdEdit size={17} color="white"/></button>
                                    <button onClick={() => techDelete(tech.id)} aria-label="delete"><MdDelete size={17} color="white"/></button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
                : <p className="title1">Clique no botão + para adicionar uma tecnologia.</p> }
        </>
    )
}