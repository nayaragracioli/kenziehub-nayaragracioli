import { Dashboard } from "../../components";
import pagesStyle from "../../style/modules/pageBox.module.scss";
import hubKenzieIcon from "../../assets/Kenzie Hub.svg";
import Style from "./style.module.scss";


export const DashboardPage = ({ user, userLogout }) => {
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
                <Dashboard user={user} userLogout={userLogout} />
            </main>
        </>
    )
}
