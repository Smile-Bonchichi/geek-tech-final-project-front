import React from 'react';
import type { PropsList } from './props/textListType.js';
import { Text } from '../../ui/index.js';

export const TextList = (props: PropsList) => {
    return (
        props.textProps.map((text, index) => {
            return <Text
                key={ index }
                style={ text.style }
                text={ text.text }
            />;
        })
    );
};
