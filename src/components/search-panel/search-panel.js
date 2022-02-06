import React, {Component} from 'react';
import './search-panel.sass'

class SearchPanel extends Component {

    state = {
        term: ''
    }

    onSearchChange = (e) => {
        const term = e.target.value
        this.setState({term})
        this.props.onSearchChange(term)
    }

    render() {
        const searchStyle = {
            fontSize: '20px'
        }
        return (
            <input
                placeholder='search'
                style={searchStyle}
                className={'form-control search-input'}
                value={this.state.term}
                onChange={this.onSearchChange}
            />
        )
    }
}

export default SearchPanel;