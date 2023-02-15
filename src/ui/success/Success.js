import React from 'react';
import { Fab } from '@mui/material';
import { Check } from '@mui/icons-material';
import type { Props } from './props/successType.js';

export const Success = (props: Props) => {
    return (
        <Fab
            aria-label='save'
            color='success'
            style={ props.style }
            sx={ {
                bgcolor: `#4ECB71`
            } }
        >
            <Check
                style={ props.style }
            />
        </Fab>
    );
};
