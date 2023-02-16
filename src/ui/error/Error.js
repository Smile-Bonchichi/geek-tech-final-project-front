import React from 'react';
import { Alert, Collapse, IconButton } from '@mui/material';
import type { Props } from './props/errorType.js';
import { Close } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { setAlert } from '../../pages/auth/slice/authSlice.js';

export const Error = (props: Props) => {
    const dispatch = useDispatch();
    
    const { alert } = useSelector(state => state.authReducer);
    
    return (
        <Collapse
            style={ {
                marginTop: `auto`,
                bottom: 10,
                right: 50,
                width: 500,
                position: `absolute`,
                whiteSpace: `break-spaces`
            } }
            in={ alert.length !== 0 }>
            <Alert
                variant='outlined'
                severity='error'
                action={
                    <IconButton
                        aria-label='close'
                        color='inherit'
                        size='small'
                        onClick={ () => {
                            dispatch(
                                setAlert('')
                            );
                        } }
                    >
                        <Close fontSize='inherit'/>
                    </IconButton>
                }
                sx={ { mb: 2 } }
            >
                { props.text }
            </Alert>
        </Collapse>
    );
};
