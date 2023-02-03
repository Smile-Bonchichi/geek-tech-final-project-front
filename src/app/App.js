import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { routes } from './routes/index.js';

import './styles/global-reset.css';

export const App = () => (
    <BrowserRouter>
        <Routes>
            {
                routes.map((route, index) => {
                    return <Route key={ index }
                                  path={ route.url }
                                  element={ route.element }
                    />;
                })
            }
        </Routes>
    </BrowserRouter>
);
