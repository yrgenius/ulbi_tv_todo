import React, { useRef, useState } from 'react';
import PostList from './components/PostList.jsx';
import PostForm from './components/PostForm.jsx';
import NotFound from './components/NotFound.jsx';
import './styles/style.css';
import './styles/input.css';


function App() {

    const [posts, setPosts] = useState([
        { id: 1, title: 'JavaScript 1', body: 'Description' },
        { id: 2, title: 'JavaScript 2', body: 'Description' },
        { id: 3, title: 'JavaScript 3', body: 'Description' },
    ]);

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(el => el.id !== post.id));
    }

    return (
        <div className="App">
            <PostForm create={createPost} />
            {(posts.length !== 0)
                ? <PostList posts={posts} title={'Посты про JS'} remove={removePost} />
                : <NotFound />
            }
        </div >
    );
}

export default App;
