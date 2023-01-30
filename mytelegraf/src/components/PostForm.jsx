import React, { useState } from 'react'
import FirstButton from './UI/button/FirstButton'
import FirstInput from './UI/input/FirstInput'

const PostForm = ({create }) => {

    const [post, setPost] = useState({ title: '', body: '' })

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id:Date.now()
            }
        /*const newPost = {
            id:Date.now(),
            title,
            body
        }*/
        //setPosts([...posts, { ...post, id: Date.now() }])
        create(newPost)
        setPost({ title: '', body: '' })
        //setTitle('')
        //setBody('')
    }

    return (
        <div>
            <form>
                {/*Управляемый элемент*/}
                <FirstInput
                    value={post.title}
                    onChange={e => setPost({ ...post, title: e.target.value })}
                    type="text"
                    placeholder="Post Name" />
                {/*Неуправляемый элемент (Неконтролируемый)*/}
                <FirstInput
                    //ref={bodyInputRef }
                    value={post.body}
                    onChange={e => setPost({ ...post, body: e.target.value })}
                    type="text"
                    placeholder="Description Name" />
                <FirstButton onClick={addNewPost}>Create Post</FirstButton>
            </form>
        </div>
        )
}

export default PostForm