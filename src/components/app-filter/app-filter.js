import './app-filter.css';

const AppFilter = (props) => {

    const buttonsBooks = [
        {name: 'all', label: 'Все книги'},
        {name: 'like', label: 'Лучшие книги'},
        {name: 'priceThen1000', label: 'Стоимость книги больше 1000Р'}
    ];

    const buttons = buttonsBooks.map(({name, label}) => {

        const active = props.filterBook === name;

        const clazz = active ? 'btn-light' : 'btn-outline-lite';

        return (

            <button
                className={`btn ${clazz}`}
                type="button"
                key={name}
                onClick={() => props.onFilterSelect(name)}>
                    {label}
                
            </button>

        )

    })
    return (
        <div className="btn-group">
            {buttons}
        </div>

    );

}

export default AppFilter;