import './app-info.css';

const AppInfo = (props) => {

    const {books, increased} = props;

    return (

        <div className="app-info">

            <h1>Учет книг в книжном магазине</h1>

            <h2>Общее число книг: {books}</h2>

            <h3>Вами выбрано книг(количество): {increased}</h3>

        </div>
    );
}

export default AppInfo;