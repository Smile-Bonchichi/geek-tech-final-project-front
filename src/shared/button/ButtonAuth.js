import React from 'react';
import { Props } from './props/buttonType';
import { Button } from '@mui/material';

export const ButtonAuth = (props: Props) => {
    return (
        <Button
            variant='outlined'
            onClick={ props.method }
            style={ props.style }
        >
            <p style={ props.textStyle }>{ props.text }</p>
        </Button>
    );
};
