
import './books-list-item.css'

const BooksListItem = (props) => {

    const { titleName, price, onDelete, onItemProp, increase, like } = props;

    let classNames = 'list-group-item d-flex justify-content-beetwen';

    if (increase) {
        classNames += ' increase';
    }

    if (like) {
        classNames += ' like';
    }

    return (

        <li className={classNames}>

            <span className="list-group-item-label"
                onClick={onItemProp} data-toggle = "like">
                {titleName}</span>

            <input type="text" className="list-group-item-input" defaultValue={price + 'P'} />

            <div className="d-flex justify-content-center align-items-center">

                <button type="button"
                    className="btn-cookie btn-sm"
                    onClick={onItemProp} data-toggle = "increase">
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                    className="btn-trash btn-sm"
                    onClick={onDelete}>
                    <i className="fas fa-trash"></i>
                </button>

                <i className="fas fa-star"></i>

            </div>

        </li>
    );

}


export default BooksListItem;