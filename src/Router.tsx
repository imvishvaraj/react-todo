// src/Router.tsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ExamplePage from './ExampleUseEffect';
import App from './App';

const AppRouter: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/example" element={<ExamplePage />} />
                <Route path="/" element={<App />} />
            </Routes>
        </Router>
    );
}

export default AppRouter;
