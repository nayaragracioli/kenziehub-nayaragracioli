import Style from "./style.module.scss";

export const Dashboard = ({user}) => {

    return (
        <div className={`containerDash larger ${Style.dashboardbox}`}>
            <hr/>
            <div className={Style.informationUser}>
                <h2 className={`title1`}>Olá, {user?.name}</h2>
                <p className={`headline bold`}>{user?.course_module}</p>
            </div>
            <hr/>
            <div className={Style.message}>
                <h2 className={`title1`}>Que pena! Estamos em desenvolvimento...</h2>
                <h3 className={`paragraph`}>Nossa aplicação está em desenvolvimento, em breve teremos novidades!</h3>
            </div>
        </div>
    )
}

