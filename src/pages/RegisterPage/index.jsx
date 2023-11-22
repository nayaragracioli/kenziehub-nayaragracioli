import { Link } from "react-router-dom";
import { RegisterForm } from "../../components/";
import pagesStyle from "../../style/modules/pageBox.module.scss";
import Style from "./style.module.scss";
import hubKenzieIcon from "../../assets/Kenzie Hub.svg";


export const RegisterPage = () => {
    return (
        <>
            <header className={`${Style.registerpage} `}>
                <img src={hubKenzieIcon} alt="Kenzie Hub Icon" />
                <Link to="/" className={`btnDisable smallD`}>
                    Voltar
                </Link>
            </header>
            <main className={`${pagesStyle.pageBox}`}>
                <div className="container sm">
                    <div>
                        <RegisterForm />
                    </div>
                </div>
            </main>
        </>

    )
}