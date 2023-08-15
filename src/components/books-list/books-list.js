import './books-list.css';

import BooksListItem from "../books-list-item/books-list-item";


const BooksList = () => {

    return (

        <ul className="app-list list-group">
            <BooksListItem/>
            <BooksListItem/>
            <BooksListItem/>
            <BooksListItem/>
        </ul>
    );
}

export default BooksList;