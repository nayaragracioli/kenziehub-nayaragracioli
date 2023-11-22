import { forwardRef } from "react";
import inputSelectStyles from "../../../style/modules/inputSelect.module.scss";


export default forwardRef(({error, label, id,  ...rest}, ref) => {
    
    return (
        <div className={`${inputSelectStyles.inputSelectBox}`}>
            <label className={`headline`} htmlFor={id}>{label}</label>
            <input ref={ref} {...rest} className={`paragraph`}/>
            <span>{error && error.message}</span>
        </div>
    )
});

