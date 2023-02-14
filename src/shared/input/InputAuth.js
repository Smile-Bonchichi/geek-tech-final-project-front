import React from 'react';
import { Props } from './props/inputType';
import { InputAdornment, TextField } from '@mui/material';

export const InputAuth = (props: Props) => {
    return (
        <TextField id={ props.id }
                   placeholder={ props.placeholder }
                   type={ props.type }
                   sx={ {
                       background: `rgba(217, 217, 217, 0.4)`,
                       width: 320,
                       marginTop: 4
                   } }
                   InputProps={ {
                       startAdornment: (
                           <InputAdornment position='start'>
                               { props.icon }
                           </InputAdornment>
                       )
                   } }
        />
    );
};
