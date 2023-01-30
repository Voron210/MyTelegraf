import React, { useState } from 'react';
import ClassCounter from './components/ClassCounter';
import Counter from './components/Counter';
import PostForm from './components/PostForm';
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import FirstButton from './components/UI/button/FirstButton';
import FirstInput from './components/UI/input/FirstInput';
import './styles/App.css'

function App() {

    //const [Name, setName] = useState("123")

    const [posts, setPosts] = useState([
        { id: 1, title: 'Javascript', body: 'Description' },
        { id: 2, title: 'Javascript', body: 'Description' },
        { id: 3, title: 'Javascript', body: 'Description' },
        { id: 4, title: 'Javascript', body: 'Description' },
        ])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }
    
    //const [body, setBody] = useState('')
    //const bodyInputRef = useRef()

    

  return (
      <div className="App">
          <PostForm create={createPost} />
          <PostList posts={posts} title="First List" />
      </div>
  );
}

export default App;
