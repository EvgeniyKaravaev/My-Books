
import './app.css';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import BooksList from '../books-list/books-list';
import BooksAddForm from '../books-add-form/books-add-form';

function App() {

    const book = [
        { titleName: "Сказки А.С.Пушкина", price: 150, increase: true, like: true, id: 1},
        { titleName: "Сказки Братьев Гримм", price: 450, increase: false, like: true, id: 2},
        { titleName: "Русские народные сказки", price: 100, increase: true, like: true, id: 3},
        { titleName: "Азбука животных", price: 50, increase: true, like: true, id: 4},

    ];

    return (
        <div className="app">
            <AppInfo />

            <div className='search-panel'>
                <SearchPanel />
                <AppFilter />
            </div>

            <BooksList book={book} />

            <BooksAddForm />

        </div>

    );

}

export default App;