import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app.jsx';
import { BrowserRouter } from 'react-router-dom';
import { userProvider } from './context/context.jsx'


createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <userProvider>
                <App />
            </userProvider>
        </BrowserRouter>
    </React.StrictMode>
);

