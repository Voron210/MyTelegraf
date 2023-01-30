import React from 'react'
import FirstButton from './UI/button/FirstButton'

const PostItem = (props) => {
    return (
        <div className="post">
            <div className="post_content">
                <strong>{props.number }.{props.post.title}</strong>
                <div>
                    {props.post.body}
                </div>
            </div>
            <div className="post_btns">
                <FirstButton>Delete</FirstButton>
            </div>
        </div>
        )
}

export default PostItem