import './app-filter.css';

const AppFilter = () => {

    return (
        <div className="btn-group">

            <button
                className="btn btn-light"
                type="button">
                Все книги
            </button>

            <button
                className="btn btn-outline-lite"
                type="button">
                Лучшие книги
            </button>

            <button
                className="btn btn-outline-lite"
                type="button">
                Стоимость книги больше 1000Р
            </button>

        </div>

    );

}

export default AppFilter;