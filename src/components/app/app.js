import { Component } from 'react';

import './app.css';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import BooksList from '../books-list/books-list';
import BooksAddForm from '../books-add-form/books-add-form';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {

            book: [
                { titleName: "Сказки А.С.Пушкина", price: 150, increase: true, like: true, id: 1 },
                { titleName: "Сказки Братьев Гримм", price: 450, increase: false, like: false, id: 2 },
                { titleName: "Русские народные сказки", price: 100, increase: true, like: false, id: 3 },
                { titleName: "Азбука животных", price: 50, increase: true, like: false, id: 4 },

            ],

            searchBook: ''

        }

        this.maxId = 5;

    }

    deleteItem = (id) => {
        this.setState(({ book }) => {
            return {
                book: book.filter(item => item.id !== id)
            }

        })
    }

    onAddItem = (titleName, price) => {
        const newItem = {
            id: this.maxId++,
            titleName,
            price,
            increase: false,
            like: false
        }
        this.setState(({ book }) => {
            const newArr = [...book, newItem];
            return {
                book: newArr
            }
        });
    }

    onItemProp = (id, prop) => {

        this.setState( ({book}) => ({
            book: book.map(item => {
                if(item.id === id){
                    return {...item, [prop]: !item[prop]}
                }

                return item;
            })
        }))

    }

    searchBooks = (items, searchBook) => {

        if (searchBook.length === 0) {
            return items
        }

        return items.filter(item => {
            return item.titleName.indexOf(searchBook) > -1;
        })

    }

    onUpdateSearch = (searchBook) => {
        this.setState({searchBook})
    }

    render() {

        const {book, searchBook} = this.state;

        const books = this.state.book.length;

        const increased = this.state.book.filter(item => item.increase).length;

        const visibleBooks = this.searchBooks(book, searchBook);

        return (
            <div className="app">
                <AppInfo books = { books } increased = { increased }/>

                <div className='search-panel'>
                    <SearchPanel onUpdateSearch = {this.onUpdateSearch}/>
                    <AppFilter />
                </div>

                <BooksList
                    book={visibleBooks}
                    onDelete={this.deleteItem}
                    onItemProp={this.onItemProp}
                    />

                <BooksAddForm
                    onAdd={this.onAddItem} />

            </div>

        );
    }

}

export default App;