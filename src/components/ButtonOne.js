import React from 'react';
import stylesWrapper from './../HOC/stylesWrapper';

const ButtonOne = (props) => {
    return (
        <button style={props.styles}>I am ButtonOne</button>
    )
}

export default stylesWrapper(ButtonOne);