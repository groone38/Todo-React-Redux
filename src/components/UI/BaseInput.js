import React from 'react';
import {Input} from "reactstrap";
import classes from "../header/Header.module.sass";

const BaseInput = (props) => {
    console.log(props.text)
    return (
        <div style={{width: '100%'}} className={props.error ? classes.input : null}>
            <Input onChange={props.onChange} type={'text'} value={props.value} placeholder={'Напишите задачу'}/>
        </div>
    );
};

export default BaseInput;