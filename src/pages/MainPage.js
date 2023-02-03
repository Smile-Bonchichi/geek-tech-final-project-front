import React from 'react';
import { Button } from '../shared/index.js';

export const MainPage = () => {
    return (
        <Button method={ () => alert('123') } text={ '123' }/>
    );
};
