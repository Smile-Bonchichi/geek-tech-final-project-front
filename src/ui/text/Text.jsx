import React from 'react';
import { Props } from './props/textType.js';

export const Text = (props: Props) => {
    return (
        <p style={ props.style }>{ props.text }</p>
    );
};
