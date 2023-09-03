import { Component } from 'react';

import './books-add-form.css';

class BooksAddForm extends Component{

    constructor (props) {

        super(props);

        this.state = {
            nameBook: '',
            priceBook: ''
        }

    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.nameBook.length < 3 || !this.state.priceBook) return;
        this.props.onAdd(this.state.nameBook, this.state.priceBook);
        this.setState({
            nameBook: '',
            priceBook: ''
        })
    }

    render () {

        const {nameBook, priceBook} = this.props;
        return (

            <div className="app-add-form">
                <h3>Добавьте новую книгу</h3>
                <form
                    className="add-form d-flex">
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Укажите название книги" 
                        name = "nameBook"
                        value = {nameBook}
                        onChange={this.onValueChange}/>
    
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="Стоимость книги в рублях!" 
                        name = "priceBook"
                        value = {priceBook}
                        onChange={this.onValueChange}/>
                    <button type="submit"
                        className="btn btn-outline-light"
                        onClick={this.onSubmit}>Добавить</button>
    
                </form>
    
            </div>
        );
    }
}

export default BooksAddForm;