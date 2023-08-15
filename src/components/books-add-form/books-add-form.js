import './books-add-form.css';

const BooksAddForm = () => {

    return (

        <div className="app-add-form">
            <h3>Добавьте новую книгу</h3>
            <form
                className="add-form d-flex">
                <input type="text"
                    className="form-control new-post-label"
                    placeholder="Укажите название книги" />

                <input type="number"
                    className="form-control new-post-label"
                    placeholder="Стоимость книги в рублях!" />
                <button type="submit"
                    className="btn btn-outline-light">Добавить</button>

            </form>

        </div>
    );
}

export default BooksAddForm;