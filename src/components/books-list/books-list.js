import './books-list.css';

import BooksListItem from "../books-list-item/books-list-item";


const BooksList = ({ book }) => {

    const elem = book.map(item => {

        const {id, ...items} = item;
        
        return (
            <BooksListItem key = {id} {...items} />
        );
    })

    return (

        <ul className="app-list list-group">
            {elem}
        </ul>
    );
}

export default BooksList;