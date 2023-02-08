import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter'
import React from 'react'
import NavBar from './components/NavBar';

/*import ClassCounter from './components/ClassCounter';
import Counter from './components/Counter';
import PostForm from './components/PostForm';
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import FirstButton from './components/UI/button/FirstButton';import FirstInput from './components/UI/input/FirstInput';
import './styles/App.css'*/

const App = () => { 
    return (
        
        <BrowserRouter>
            
            <NavBar />
            <AppRouter/>
        </BrowserRouter>
  )
}

export default App;
