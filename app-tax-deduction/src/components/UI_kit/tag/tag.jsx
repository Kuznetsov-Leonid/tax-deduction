import React from "react";
import './style.css';

const Tags = () => {
    const ValueRadio = {
        value1 : "Платёж",
        value2 : "Срок"
    }
    return(
        <>
            <div className="form_radio_btn">
                <div class="radio">
                    <input id="radio-1" type="radio" name="radio" value="1" checked/>
                    <label for="radio-1">{ValueRadio.value1}</label>
                </div>
                <div class="form_radio_btn">
                    <input id="radio-2" type="radio" name="radio" value="2"/>
                    <label for="radio-2">{ValueRadio.value2}</label>
                </div>
            </div>
        </>
    )
}
export default Tags