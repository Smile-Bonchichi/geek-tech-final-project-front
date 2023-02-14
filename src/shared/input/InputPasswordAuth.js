import React, { useState } from 'react';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Props } from './props/inputType.js';

export const InputPasswordAuth = (props: Props) => {
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = () => setShowPassword(!showPassword);
    
    return (
        <TextField id={ props.id }
                   placeholder={ props.placeholder }
                   type={ showPassword ? 'text' : 'password' }
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
                       ),
                       endAdornment: (
                           <InputAdornment position='end'>
                               <IconButton
                                   aria-label='toggle password visibility'
                                   onClick={ handleClickShowPassword }
                                   onMouseDown={ handleMouseDownPassword }
                               >
                                   { showPassword ? <Visibility/> :
                                       <VisibilityOff/> }
                               </IconButton>
                           </InputAdornment>
                       )
                   } }
        />
    );
};
