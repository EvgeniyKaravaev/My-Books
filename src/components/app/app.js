
import './app.css';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import BooksList from '../books-list/books-list';
import BooksAddForm from '../books-add-form/books-add-form';

function App() {

    return (
        <div className="app">
            <AppInfo />

            <div className='search-panel'>
                <SearchPanel />
                <AppFilter />
            </div>

            <BooksList />

            <BooksAddForm />

        </div>

    );

}

export default App;