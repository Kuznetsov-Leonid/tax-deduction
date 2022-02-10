import React, { useRef, useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useForm } from 'react-hook-form';
import './style.css';

//регулярка /^\d{1,}$/,
const AppModal = () => {
    const {
        register,
        formState: {
            errors,
            //isValid
        },
        handleSubmit,
        reset,
    } = useForm({
        mode: "onBlur"
    }); 

    const [input, setInput] = useState('');
    
    function taxDeducation(){
        let result;
        if (input != " "){
            result = (input * 12) * 0.13;
        } else {
            result = null;
        }
        return +result; 
    }
    const onSubmit = (data) => {
        alert(taxDeducation());
    }
    return(
        <>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3 castom" controlId="formBasicEmail">
                    <Form.Control
                    {...register("text", {
                        required: "Поле обязательно к заполнению",
                        pattern: {
                            value: /^\d{1,}$/,
                            message: "Введите число"
                        }
                    })}
                        id="castomInput" type="text" name="text" placeholder="Введите данные" 
                        value={input} onInput={e => setInput(e.target.value)}
                    />
                </Form.Group>
                <div style={{color:'red'}}>{errors?.text && <p>{errors?.text?.message || "Error!"}</p>}</div>
                <Button 
                    id="send"
                    value="Send"
                    type="submit"
                    style={{'text-decoration':'none'}} 
                    className="text_button" 
                    variant="link">
                        Расчитать
                </Button>
            </Form>
        </>
    )
}
export default AppModal