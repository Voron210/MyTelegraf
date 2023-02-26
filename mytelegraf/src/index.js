import React, { createContext } from 'react';
//import ReactDOM from 'react-dom';
import * as ReactDOMClient from 'react-dom/client';
import App from './App';
import DialogStore from './store/DialogStore';
import MenuStore from './store/MenuStore';
import UserStore from './store/UserStore';
import MessageStore from './store/MessageStore';
import NewsStore from './store/NewsStore';

export const Context = createContext(null)

const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(
    <Context.Provider value={{
        user: new UserStore(),
        menulist: new MenuStore(),
        dialoglist: new DialogStore(),
        messagelist: new MessageStore(),
        newslist: new NewsStore()
    }}>
        <App/>
    </Context.Provider >
);
