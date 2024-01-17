import React from 'react';
import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.tsx';

const rootElem = document.getElementById('root')

if (rootElem) {
    const root = ReactDOM.createRoot(rootElem);

    root.render(
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );
}

