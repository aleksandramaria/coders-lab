import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
    const LikeBox = props => (
        <div>
            <p>{ props.likes } likes</p>
            <button>Lubie to</button>
        </div>
    );

    class LikeBox1 extends React.Component {
        render() {
            return (
                <div>
                    <p>{ this.props.likes } likes</p>
                    <button>Lubie to</button>
                </div>
            )
        }
    }

    ReactDOM.render(
        <div>
            <LikeBox likes={4}/>
            <LikeBox1 likes={97}/>
        </div>,
        document.getElementById('app')
    );
});