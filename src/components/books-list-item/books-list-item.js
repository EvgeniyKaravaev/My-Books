import './books-list-item.css'

const BooksListItem = ({titleName, price, increase}) => {

    let classNames = 'list-group-item d-flex justify-content-beetwen';

    if(increase){
        classNames += ' increase';
    }

    return (

        <li className = {classNames}>

            <span className="list-group-item-label">{titleName}</span>

            <input type="text" className="list-group-item-input" defaultValue={price + 'P'} />

            <div className="d-flex justify-content-center align-items-center">

                <button type="button"
                    className="btn-cookie btn-sm">
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                    className="btn-trash btn-sm">
                    <i className="fas fa-trash"></i>
                </button>

                <i className="fas fa-star"></i>

            </div>

        </li>
    );

}

export default BooksListItem;