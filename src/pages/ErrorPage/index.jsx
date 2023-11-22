import pagesStyle from "../../style/modules/pageBox.module.scss";

export const ErrorPage = () => {
    return (
        <main className={`${pagesStyle.pageBox}`}>
            <div className="container sm">
                <div>
                    <h1>Error 404</h1>
                    <p>Não foi possível encontrar a página!</p>
                </div>
            </div>
        </main>
    )
}