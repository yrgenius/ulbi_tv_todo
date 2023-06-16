import React, { useMemo, useRef, useState } from 'react';
import PostList from './components/PostList.jsx';
import PostForm from './components/PostForm.jsx';
import NotFound from './components/NotFound.jsx';
import PostFilter from './components/PostFilter.jsx';
import './styles/style.css';
import './styles/input.css';


function App() {

    const [posts, setPosts] = useState([
        { id: 1, title: 'JavaScript 1', body: 'Description' },
        { id: 2, title: 'JavaScript 2', body: 'Description' },
        { id: 3, title: 'JavaScript 3', body: 'Description' },
    ]);

    const [filter, setFilter] = useState({ sort: '', query: '' });

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
    }

    const removePost = (post) => {
        setPosts(posts.filter(el => el.id !== post.id));
    }

    const sortedPost = useMemo(() => {
        console.log('CALL getSortedPost');
        if (filter.sort) {
            return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
        }
        return posts;
    }, [filter.sort, posts]);

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPost.filter(post => post.title.toLowerCase().includes(filter.query));
    }, [filter.query, filter.sort]);

    return (
        <div className="App">
            <PostForm create={createPost} />
            <hr style={{ margin: '15px 0' }} />
            <PostFilter
                filter={filter}
                setFilter={setFilter} />
            <PostList
                title={'Посты про JS'}
                posts={sortedAndSearchedPosts}
                remove={removePost} />
        </div >
    );
}

export default App;
