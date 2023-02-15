import React from 'react';
import { Props } from './props/inputType';
import { InputAdornment, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setRegistrationModel } from '../../pages/auth/slice/authSlice.js';

export const InputAuth = (props: Props) => {
    const dispatch = useDispatch();
    const changeInput = (e) => {
        dispatch(setRegistrationModel(
            {
                type: props.id,
                value: e.target.value
            })
        );
    };
    
    return (
        <TextField id={ props.id }
                   onChange={ changeInput }
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
