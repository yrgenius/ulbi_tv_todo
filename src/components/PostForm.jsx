import React, { useState } from 'react';
import MyButton from './UI/button/MyButton.jsx';
import MyInput from './UI/input/MyInput.jsx';

const PostForm = ({ create }) => {

    const [post, setPost] = useState({ title: '', body: '' });

    function addNewPost(e) {
        e.preventDefault();

        const newPost = { ...post, id: Date.now() }
        create(newPost);
        setPost({ title: '', body: '' });
    }

    return (
        <form className='input_wrapper wrapper'>
            <MyInput
                value={post.title}
                onChange={(e) => setPost({ ...post, title: e.target.value })}
                type='text'
                placeholder='Post title'></MyInput>
            <MyInput
                value={post.body}
                onChange={(e) => setPost({ ...post, body: e.target.value })}
                type='text'
                placeholder='Post description'></MyInput>
            {/* <MyInput
                    ref={bodyInputRef}
                    type='text'
                    placeholder='Post description'></MyInput> */}
            <MyButton onClick={addNewPost}>Создать пост</MyButton>
        </form>
    );
};

export default PostForm;