import { forwardRef } from "react";
import inputSelectStyles from "../../../style/modules/inputSelect.module.scss";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

export default forwardRef(({ isHidden, setIsHidden, error, label, id, ...rest }, ref) => {

    return (
        <div className={`${inputSelectStyles.inputSelectBox} ${inputSelectStyles.password}`}>
            <label className={`headline`} htmlFor={id}>{label}</label>
            <input ref={ref} {...rest} className={`paragraph`} />
            <span>{error && error.message}</span>
            <button onClick={() => setIsHidden(!isHidden)}>
                {isHidden ? <MdVisibilityOff size={18} /> : <MdVisibility size={18}/>}
            </button>
        </div>
    )
});
