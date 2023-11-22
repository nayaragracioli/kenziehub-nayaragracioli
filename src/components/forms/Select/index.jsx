import { forwardRef } from "react";
import inputSelectStyles from "../../../style/modules/inputSelect.module.scss";

export default forwardRef (({error, children, label, id, ...rest}, ref) => {

    return (
        <div className={`${inputSelectStyles.inputSelectBox}`}>
            <label className={`headline`} htmlFor={id}>{label}</label>
            <select ref={ref} {...rest} id={id} className={`paragraph`}>{children}</select>
            <span>{error && error.message}</span>
        </div>
    )
})


