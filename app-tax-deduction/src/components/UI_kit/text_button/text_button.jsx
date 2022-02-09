import React from "react";
import './style.css';

const text_btn = "Расчитать";

    function Txt(){
        return(
            <p className="text_button">{text_btn}</p>
        )
    }

const text_button = {
    Txt : Txt
}
export default text_button