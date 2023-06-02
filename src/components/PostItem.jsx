import React from 'react';
import MyButton from './UI/button/MyButton';
import '../styles/post.css';
import style from './UI/button/MyButton.module.css';

const PostItem = (props) => {

    const removePost = () => {
        props.remove(props.post);
    }

    return (
        <div className='post'>
            <div className='post__content'>
                <strong>{props.number}. {props.post.title}</strong>
                <p>{props.post.body}</p>
            </div>
            <MyButton className={style.btn} onClick={removePost}>Удалить</MyButton>
        </div>
    );
};

export { PostItem }