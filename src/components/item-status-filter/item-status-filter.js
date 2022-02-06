import React, {Component} from 'react';

export default class ItemStatusFilter extends Component {

    buttons = [
        {name: 'all', label: 'All'},
        {name: 'active', label: 'Active'},
        {name: 'done', label: 'Done'},
    ]



    render() {
        const buttons = this.buttons.map(e => {
            const isActive = this.props.filter === e.name
            const clazz = isActive ? 'btn-info' : 'btn-outline-secondary'
            return (
                <button key={e.name} type={'button'} className={`btn ${clazz}`} onClick={() => this.props.onFilterChange(e.name)}>
                    {e.label}
                </button>
            )
        })

        return (
            <div className={'btn-group'}>
                {buttons}
            </div>
        );
    }
}