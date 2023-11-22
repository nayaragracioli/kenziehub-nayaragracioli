import { LoginForm } from "../../components/forms";
import pagesStyle from "../../style/modules/pageBox.module.scss";
import hubKenzieIcon from "../../assets/Kenzie Hub.svg";
import loginStyle from "./style.module.scss"; 


export const LoginPage = () => {
    return (
        <>
            <header className={loginStyle.loginbox}>
                <img src={hubKenzieIcon} alt="Kenzie Hub Icon" />
            </header>
            <main className={`${pagesStyle.pageBox}`}>
                <div className="container sm">
                    <div>
                        <LoginForm />
                    </div>
                </div>
            </main>
        </>
    )
}