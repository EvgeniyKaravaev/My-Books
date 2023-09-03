import { Component } from 'react';

import './books-list-item.css'

class BooksListItem extends Component{

    constructor (props) {
        super(props);

        this.state = {
            increase: false,
            like: false
        }
    }

    onIncrease = () => {
        this.setState( ({increase}) => ({
            increase: !increase
        }) )
    }

    onLike = () => {
     this.setState( ({like}) => ({
        like: !like
     }))   
    }

    render () {

        const {titleName, price, onDelete} = this.props;
        const {increase, like} = this.state;

        let classNames = 'list-group-item d-flex justify-content-beetwen';

    if (increase){
        classNames += ' increase';
    }

    if(like) {
        classNames += ' like';
    } 

    return (

        <li className = {classNames}>

            <span className="list-group-item-label"
            onClick={this.onLike}>
                {titleName}</span>

            <input type="text" className="list-group-item-input" defaultValue={price + 'P'} />

            <div className="d-flex justify-content-center align-items-center">

                <button type="button"
                    className="btn-cookie btn-sm"
                    onClick={this.onIncrease}>
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
}

export default BooksListItem;