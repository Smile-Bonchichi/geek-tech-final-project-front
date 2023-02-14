import React from 'react';
import { Link } from '@mui/material';
import type { Props } from './props/hrefType.js';

export const Href = (props: Props) => {
    return (
        <Link
            style={ props.style }
            href={ props.url }>
            { props.text }
        </Link>
    );
};
