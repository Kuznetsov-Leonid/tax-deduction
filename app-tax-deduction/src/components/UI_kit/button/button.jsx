import React from "react";
import './style.css'

const valueButton = {
    solid : "Добавить",
    trans : "Налоговый вычет"
};

const BigBtnSolid = () => {
    return(
        <button className="castom-bigBtn-Solid">{valueButton.solid}</button>
    )
}

const BigBtnTransparent = () => {
    return(
        <button className="castom-bigBtn-Trans">{valueButton.trans}</button>
    )
}

const Buttons = {
    BigBtnSolid : BigBtnSolid,
    BigBtnTransparent : BigBtnTransparent
}
export default Buttons




