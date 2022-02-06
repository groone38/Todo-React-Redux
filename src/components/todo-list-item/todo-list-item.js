import React, {Component} from 'react';
import  './todo-list-item.sass'

export default class TodoListItem extends Component {

    render() {
        const {done, important, label, onDeleted, onToggleDone, onToggleImportant} = this.props
        let classNames = 'todo-list-item-label'
        if(done) {
            classNames += ' done'
        }
        if(important) {
            classNames += ' important'
        }
        return (
        <span className={'todo-list-item d-flex justify-content-between'}>
            <span className={classNames} onClick={onToggleDone}>{label}</span>
            <span>
            <button type={'button'} className={'btn btn-outline-success float-right'} onClick={onToggleImportant}>
                <i className={'fa fa-exclamation'}/>
            </button>
            <button type={'button'} className={'btn btn-outline-danger float-right'} onClick={onDeleted}>
                <i className={'fa fa-trash-o'}/>
            </button>
            </span>
        </span>
        );
    }
}