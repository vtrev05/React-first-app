import React from 'react';

let back = 'white';

const  OnionHunter = (props) => {
    const handleChange = (ev) => {
        const inputText = ev.target.value;
        if (inputText.includes('onion')) {
          back = props.background;
    } 
    };
    return (
        <textarea
        style={{width: '100%', height: '100%', backgroundColor: {back}
        }} 
        onChange={handleChange}
        />
    )
}

export default OnionHunter