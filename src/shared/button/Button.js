import React from 'react';
import Props from './props/buttonType';

export const Button = (props: Props) => {
    return (
        <button onClick={ props.method }>
            { props.text }
        </button>
    );
};
