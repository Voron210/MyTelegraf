import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import * as ReactDOMClient from 'react-dom/client';
import App from './App';
import UserStore from './store/UserStore';

export const Context = createContext(null)

const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(
    <Context.Provider value={{
        user: new UserStore()
    }}>
        <App/>
    </Context.Provider >
);
