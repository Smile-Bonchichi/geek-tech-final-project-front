import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { routes } from './routes/index.js';

const App = () => (
    <Routes>
        {
            routes.map((route, index) => {
                return <Route key={ index } { ...route }/>;
            })
        }
    </Routes>
);

export default App;