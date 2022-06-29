import React from 'react';
import './Button.css';

export const Button = () => {
    return (
        <button onClick={() =>  alert("Hello react") }>Hello React!</button>
    )
}