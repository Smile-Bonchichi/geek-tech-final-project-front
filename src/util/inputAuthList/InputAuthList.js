import React from 'react';
import { PropsList } from './props/inputAuthListType.js';
import { InputAuth } from '../../ui/index.js';
import { InputPasswordAuth } from '../../ui/input/InputPasswordAuth.js';

export const InputAuthList = (props: PropsList) => {
    return (
        props.inputProps.map((input, index) => {
            return input.type === 'Password' ?
                <InputPasswordAuth
                    key={ index }
                    id={ input.id }
                    type={ input.type }
                    placeholder={ input.placeholder }
                    icon={ input.icon }
                /> :
                <InputAuth
                    key={ index }
                    id={ input.id }
                    type={ input.type }
                    placeholder={ input.placeholder }
                    icon={ input.icon }
                />;
        })
    );
};
