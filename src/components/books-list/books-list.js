import './books-list.css';

import BooksListItem from "../books-list-item/books-list-item";


const BooksList = ({ book }) => {

    const elem = book.map(item => {
        return (
            <BooksListItem {...item} />
        );
    })

    return (

        <ul className="app-list list-group">
            {elem}
        </ul>
    );
}

export default BooksList;