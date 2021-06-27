import React from 'react';
import PropTypes from 'prop-types';

function HalfPage(props) {
    console.log(props)
    return (
        <>
        <div>
        <h1
        style={{width: 500}} 
        >Hola {props.price}</h1>
        <h2
        style={{width: 500, marginLeft:0, display: 'inline'
        }} 
        >Hola soy Germán</h2>
        </div>
        </>
    )
}

HalfPage.defaultProps = {
    description: 'No hay descripción'
}

HalfPage.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }
export default HalfPage;