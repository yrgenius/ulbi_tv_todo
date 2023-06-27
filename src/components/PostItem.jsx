import React from 'react';
import MyButton from './UI/button/MyButton';
import style from './UI/button/MyButton.module.css';
import { useNavigate } from 'react-router-dom';
import '../styles/post.css';

const PostItem = (props) => {
    const router = useNavigate();

    const removePost = () => {
        props.remove(props.post);
    }

    return (
        <div className='post'>
            <div className='post__content'>
                <strong>{props.post.id}. {props.post.title}</strong>
                <p>{props.post.body}</p>
            </div>
            <div className='wrapper__btn'>
                <MyButton className={style.btn} onClick={() => router(`/post/${props.post.id}`)} >Открыть</MyButton>
                <MyButton className={style.btn} onClick={removePost}>Удалить</MyButton>
            </div>
        </div>
    );
};

export { PostItem }