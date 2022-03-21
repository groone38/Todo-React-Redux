import React from 'react';
import classes from "./Main.module.sass";
import {useDispatch, useSelector} from "react-redux";
import {Button, ListGroup, ListGroupItem} from "reactstrap";
import '../../styles.css'
import {deleteTask, doneTask, importantTask} from "../store/actions/tack";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const Main = () => {
    const dispatch = useDispatch()
    const task = useSelector(state => state.task.task)
    const handlerDelete = (e) => {
        dispatch(deleteTask(e))
    }
    const handlerDone = (e) => {
        dispatch(doneTask(e))
    }
    const handlerImportant = (e) => {
        dispatch(importantTask(e))
    }
    return (
        // <ListGroup
        //     numbered
        // >
        //     <ListGroupItem>
        //         Cras justo odio
        //     </ListGroupItem>
        //     <ListGroupItem>
        //         Dapibus ac facilisis in
        //     </ListGroupItem>
        //     <ListGroupItem>
        //         Morbi leo risus
        //     </ListGroupItem>
        //     <ListGroupItem>
        //         Porta ac consectetur ac
        //     </ListGroupItem>
        //     <ListGroupItem>
        //         Vestibulum at eros
        //     </ListGroupItem>
        // </ListGroup>
        <div className={classes.main}>
            <ListGroup>
            <TransitionGroup>
            {task.map(i => (
                <CSSTransition
                    key={i.id}
                    timeout={500}
                    classNames="item"
                >
                <ListGroupItem key={i.id} >
                    <div className={classes.block}>
                    <p className={(i.done ? classes.done : null) + ' ' + (i.important ? classes.important : null)}>{i.text}</p>
                    <div className={classes.item}>
                        <Button
                            color="success"
                            outline
                            size=""
                            onClick={() => handlerImportant(i.id)}
                        >
                            <i className="bi bi-star"/>
                        </Button>
                        <Button
                            color="warning"
                            outline
                            size=""
                            onClick={() => handlerDone(i.id)}
                        >
                            <i className="bi bi-check2-circle"/>
                        </Button>
                        <Button
                            color="danger"
                            outline
                            size=""
                            onClick={() => handlerDelete(i.id)}
                        >
                            <i className="bi bi-trash"/>
                        </Button>
                    </div>
                    </div>
                </ListGroupItem>
                </CSSTransition>
            ))}
            </TransitionGroup>
            </ListGroup>
        </div>
    );
};

export default Main;