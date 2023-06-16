import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import NotFound from './NotFound.jsx';
import { PostItem } from './PostItem.jsx';

const PostList = ({ posts, title, remove }) => {

    if (!posts.length) {
        return <NotFound />
    }

    return (
        <div>
            <h1 style={{ textAlign: 'center', fontSize: '30px', marginTop: '30px' }}>
                {title}
            </h1>
            <TransitionGroup>
                {posts.map((el, ind) =>
                    <CSSTransition
                        key={el.id}
                        timeout={500}
                        classNames='post'
                    >
                        <PostItem post={el} number={ind + 1} key={el.id} remove={remove} />
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    );
};

export default PostList;