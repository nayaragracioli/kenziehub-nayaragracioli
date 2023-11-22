import LoadingIcon from "../../assets/LoadingIcon.svg";
import Style from "./style.module.scss";

export const Loading = () => {

    return(
        <div className={Style.loadingBox}>
            <img src={LoadingIcon} alt="LoadingIcon" />
        </div>
    )
}