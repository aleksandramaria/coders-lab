import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    const SearcherFn = () => (
        <form>
            <input />
            <button>wyszukaj</button>
        </form>
    );

    class SearcherCl extends React.Component {
        render() {
            return (
                <form>
                    <input />
                    <button>wyszukaj</button>
                </form>
            )
        }
    }

    ReactDOM.render(
        <div>
            <SearcherFn />
            <SearcherCl />
        </div>,
        document.getElementById('app')
    );
});