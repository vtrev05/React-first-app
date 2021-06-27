import React, { useState } from 'react'

function MyBirthday () {
    const [number, setNumber] = useState(20);
    const [present, setPresent] = useState(1);

    const handleClick = () => {
        setNumber(number + 1)
    }
    const handleClickPresents = () => {
        setPresent(present + 1)
    }

    return (
        <div>
            <p>Hoy tengo {number} años de edad</p>
            <button
            onClick={handleClick}
            >Hazme más viejo
            </button>
            <p>Hoy tengo {present} regalo</p>
            <button
            onClick={handleClickPresents}
            >Hazme más regalos
            </button>
        </div>
    );
};

export default MyBirthday
