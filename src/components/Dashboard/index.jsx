import { useContext } from "react";
import {MdAdd} from "react-icons/md";
import Style from "./style.module.scss";
import { UserContext } from "../../providers/UserContext";
import { TechContext } from "../../providers/TechContext";
import { CreateTechModal } from "./TechCard/CreateTechModal";
import { TechList } from "./TechList";
import {EditTechModal} from "./TechCard/EditTechModal";

export const Dashboard = () => {
    const { user } = useContext(UserContext);
    const {isVisibleCreate, setIsVisibleCreate, editingTech } = useContext(TechContext);

    const open = () => {
        setIsVisibleCreate(true)
    }

    return (
        <div className={`containerDash larger ${Style.dashboardbox}`}>
            <hr />
            <div className={Style.informationUser}>
                <h2 className={`title1`}>Olá, {user?.name}</h2>
                <p className={`headline bold`}>{user?.course_module}</p>
            </div>
            <hr />
            <div className={Style.tech}>
                <h2 className={`title1`}>Tecnologias</h2>
                <button onClick={() => open()}><MdAdd size={21} color="white"/></button>
            </div>
            <section>
                <TechList/>
            </section>
           {isVisibleCreate ? (<CreateTechModal/>) : null} 
           {editingTech ? <EditTechModal/> : null}
        </div>
    )
}

