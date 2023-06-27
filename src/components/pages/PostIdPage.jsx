import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFetching } from '../../hooks/useFetching';
import PostService from '../../API/PostService';
import Loader from '../UI/loader/Loader';

const PostIdPage = () => {
    const param = useParams();
    const [post, setPost] = useState({});
    const [comment, setComment] = useState([]);

    const [fetchPostById, isLoading, error] = useFetching(async () => {
        const response = await PostService.getById(param.id);
        setTimeout(() => setPost(response.data), 1000);
        // await setPost(response.data);
    });

    const [fetchComments, isCommentsLoading, commentsError] = useFetching(async () => {
        const response = await PostService.getComments(param.id);
        setComment(response.data);
    });

    useEffect(() => {
        fetchPostById();
        fetchComments();
    }, []);

    return (
        <div>
            <h1>Page with id={param.id}</h1>
            {
                (isLoading)
                    ? <Loader />
                    : <div>{post.id} {post.title}</div>
            }
            <h2>Комментарии</h2>
            {
                (isCommentsLoading)
                    ? <Loader />
                    : <div>{
                        comment.map(c =>
                            <div key={c.id}>
                                <h3>{c.name}</h3>
                                <p>{c.body}</p>
                            </div>
                        )
                    }</div>
            }
        </div>
    );
};

export default PostIdPage;