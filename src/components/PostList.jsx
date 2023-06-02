import React from 'react';
import { PostItem } from './PostItem.jsx';

const PostList = ({ posts, title, remove }) => {

    return (
        <div>
            <h1 style={{ textAlign: 'center', fontSize: '30px', marginTop: '30px' }}>
                {title}
            </h1>

            {posts.map((el, ind) =>
                <PostItem post={el} number={ind + 1} key={el.id} remove={remove} />
            )}
        </div>
    );
};

export default PostList;