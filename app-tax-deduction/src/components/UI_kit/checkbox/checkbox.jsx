import React from "react";
import './style.css';

function Check(){
    return(
        <>
            <input className="custom-checkbox" id="checkbox-id" type="checkbox" />
            <label for="checkbox-id"></label>
        </>
    )
}

const checkbox = () => {
    Check : Check
}
export default checkbox