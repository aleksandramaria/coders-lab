import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
    const LikeBox = () => (
        <div>
            <p>100 likes</p>
            <button>Lubie to</button>
        </div>
    );

    class LikeBox1 extends React.Component {
        render() {
            return (
                <ul>
                    <li>100 likes</li>
                    <button>Lubie to</button>
                </ul>
            )
        }
    }

    ReactDOM.render(
        <div>
            <LikeBox />
            <LikeBox1 />
        </div>,
        document.getElementById('app')
    );
});