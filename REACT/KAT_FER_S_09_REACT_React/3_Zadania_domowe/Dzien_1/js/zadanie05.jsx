import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
    const size = '200px';

    // const style = {
    //     height: `${size}`,
    //     width: `${size}`,
    //     backgroundColor: 'blue',
    // }

    // const style = {
    //     height: size,
    //     width: size,
    //     backgroundColor: 'blue',
    // }

    ReactDOM.render(
        {/*<div style={ style }></div>,*/}
        <div style={ {height: size, width: size, backgroundColor: 'blue'} }> bla </div>,
        document.getElementById('app')
    );
});
