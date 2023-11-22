import { Dashboard } from "../../components";
import hubKenzieIcon from "../../assets/Kenzie Hub.svg";
import Style from "./style.module.scss";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";


export const DashboardPage = () => {
    const { userLogout } = useContext(UserContext);

    return (
        <>
            <header>
                <div className="containerDash larger ">
                    <div className={Style.dashboardpage}>
                        <img src={hubKenzieIcon} alt="Kenzie Hub Icon" />
                        <button className={`btnDisable smallD`} type="submit" onClick={() => userLogout()}>Sair</button>
                    </div>
                </div>
            </header>
            <main>
                <Dashboard />
            </main>
        </>
    )
}