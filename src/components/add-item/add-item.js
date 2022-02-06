import React, {Component} from 'react';
import './add-item.sass'
import {connect} from "react-redux";
import {addItem} from "../store/action/addItem";

class AddItem extends Component {

    state = {
        label: ''
    }

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        if(this.state.label.length > 0) {
            this.props.onEddit(this.state.label)
            this.setState({
                label: ''
            })
        }
    }

    render() {
        return (
            <form className={'item-add-form d-flex'} onSubmit={this.props.addItem(this.state.label)}>
                <input type="text" className={'form-control'} onChange={this.onLabelChange}
                       placeholder={'What needs to be done'} value={this.state.label}/>
                <button
                    type={'button'}
                    className={'btn btn-outline-secondary'}
                    onClick={this.onSubmit}
                >
                    Add item
                </button>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addItem: label => dispatch(addItem(label))
    }
}

export default connect(null, mapDispatchToProps)(AddItem);