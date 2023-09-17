import { Component } from 'react';

import './search-panel.css';

class SearchPanel extends Component {

    constructor (props) {

        super(props);

        this.state = {

            searchBook: ''
        }

    }

    onUpdateSearch = (e) => {
        
        const searchBook = e.target.value;

        this.setState({searchBook});

        this.props.onUpdateSearch(searchBook);

    }

    render () {
        return (

            <input type="text"
                className="form-control search-input"
                placeholder="Найти книгу"
                value={this.state.searchBook}
                onChange={this.onUpdateSearch}
            />
        );
    }
}

export default SearchPanel;