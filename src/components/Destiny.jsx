import React from 'react';

const Destiny = () => {
    
    const cities = ['Buenos Aires', 'Sydney', 'Praga', 'Boston', 'Tokio'];

    const handleClick = (i) => {
            window.alert(`Tu destino es viajar a `);
            
        }

    return (
    <select onClick={handleClick}>
        <option value={cities[0]} onClick={handleClick}>{cities[0]}</option>
        <option onClick={handleClick}>{cities[1]}</option>
        <option onClick={handleClick}>{cities[2]}</option>
        <option onClick={handleClick}>{cities[3]}</option>
        <option onClick={handleClick}>{cities[4]}</option>
    </select>
    )
}

export default Destiny

