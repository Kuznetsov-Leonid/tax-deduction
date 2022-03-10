import React, { useRef, useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useForm } from 'react-hook-form';
import './style.css';



//Валидация формы
const AppModal = () => {

    //Обработка ввода
    const [input, setInput] = useState('');

    const {
        register,
        formState: {
            errors,
            //isValid
        },
        handleSubmit,
        reset,
    } = useForm({
        mode: "onSubmit"
    }); 
    
    //Расчётная операция
    function taxDeducation(){
        let result;
        if (input != " "){
            result = (input * 12) * 0.13;
        } else {
            result = null;
        }

        return +result; 
    }

    function taxDeducationSec(){
        let sec;
        let tax = taxDeducation();
        sec = tax / 3;

        return +sec;
    }

    const onSubmit = (data) => {
        let relise = document.querySelector(".rel");
        relise.classList.remove("displayNone");
    }


    const Relise = () => {
        return(
            <>
                <p>
                    Итого можете внести в качестве досрочных:
                </p>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label={taxDeducation() + " " + "Рублей в 1-ый год"}/>
                </Form.Group>
                <hr />
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label={taxDeducation() + " " +"Рублей в 2-ой год"}/>
                </Form.Group>
                <hr />
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label={taxDeducation() + " " + "Рублей в 3-ий год"}/>
                </Form.Group>
                <hr />
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label={taxDeducationSec() + " " + "Рублей в 4-ый год"}/>
                </Form.Group>
                <hr />
            </>
        );
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
                    variant="link"
                    >
                        Расчитать
                </Button>
            </Form>
            <div className="displayNone rel">
                <Relise/>
            </div>
        </>
    )
}
export default AppModal