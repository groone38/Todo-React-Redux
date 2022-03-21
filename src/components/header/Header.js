import React, {useState} from 'react';
import BaseInput from "../UI/BaseInput";
import BaseButton from "../UI/BaseButton";
import classes from "./Header.module.sass";
import {useDispatch} from "react-redux";
import {bindTack} from "../store/actions/tack";

const Header = () => {
    const dispatch = useDispatch()
    const [text, setText] = useState('')
    const [error, setError] = useState(false)
    const handlerInput = e => {
        setText(e.target.value)
    }

    const handlerClick = (e) => {
        e.preventDefault()
        if (text) {
            const newTask = {id: Math.random().toString(36).substring(2, 9), text: text, done: false, important: false}
            dispatch(bindTack(newTask))
            setError(false)
        } else {
            setError(true)
        }
        setText('')
    }
    console.log(text)
    return (
        <>
            <div className={classes.header}>
                <BaseInput error={error} value={text} onChange={handlerInput}/>
                <BaseButton onClick={handlerClick}/>
            </div>
            {error && <p style={{color: 'red'}}>Вы не ввели задачу</p>}
        </>
    );
};

export default Header;