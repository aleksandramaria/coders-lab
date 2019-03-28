import React from 'react';
import ReactDOM from 'react-dom';

class BookInfo extends React.Component {
    state = {
        title: '',
        loading: true,
    };

    componentDidMount() {
        const {isbn} = this.props;

        fetch('https://www.googleapis.com/books/v1/volumes?q=isbn:' + isbn)
            .then(r => r.json())
            .then(data => {

                this.setState({
                    loading: false,
                    title: data.items[0].volumeInfo.title,
                });

            })
            .catch(err => {

                this.setState({
                    loading: false,
                    title: 'Coś poszło nie tak? Może nieprawdiłowy ISBN.',
                });

            });
    }

    render() {
        const {loading, title} = this.state;
        const {isbn} = this.props;

        if (loading) {
            return null;
        }

        return <h1>{title} <small>({isbn})</small></h1>;
    }
}

const App = () => <div>
    <BookInfo isbn="0747532699"/>
    <BookInfo isbn="0747442699"/>
    <BookInfo isbn="0747530009"/>
    <BookInfo isbn="012332699"/>
</div>;

document.addEventListener('DOMContentLoaded', () => {

    ReactDOM.render(
        <App />,
        document.querySelector('#app')
    );

});