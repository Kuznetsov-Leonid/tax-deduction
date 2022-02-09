import React from "react";
import { Form } from "react-bootstrap";

const CastomInput = () => {
    const plasehold = "Введите данные";
    return(
        <>
            <Form>
                <Form.Group className="mb-3 castom" controlId="formBasicEmail">
                    <Form.Control id="castomInput" type="text" placeholder={plasehold} />
                </Form.Group>
            </Form>
        </>
    )
}

const Input = {
    CastomInput : CastomInput
}
export default Input