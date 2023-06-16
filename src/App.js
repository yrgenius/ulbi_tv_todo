import React, { useMemo, useRef, useState } from 'react';
import PostList from './components/PostList.jsx';
import PostForm from './components/PostForm.jsx';
import NotFound from './components/NotFound.jsx';
import MySelect from "./components/UI/select/MySelect";
import './styles/style.css';
import './styles/input.css';


function App() {

    const [posts, setPosts] = useState([
        { id: 1, title: 'JavaScript 1', body: 'Description' },
        { id: 2, title: 'JavaScript 2', body: 'Description' },
        { id: 3, title: 'JavaScript 3', body: 'Description' },
    ]);

    const [selectedSort, setSelectedSort] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
    }

    const removePost = (post) => {
        setPosts(posts.filter(el => el.id !== post.id));
    }

    function getSortedPost() {
        console.log('CALL getSortedPost');
        if (selectedSort) {
            return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]));
        }
        return posts;
    }

    const sortedPost = useMemo(() => getSortedPost(), [selectedSort, posts]);

    const sortPosts = (sort) => {
        setSelectedSort(sort);
    }

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPost.filter(post => post.title.includes(searchQuery));
    }, [searchQuery, sortPosts]);

    const onChange = (value) => {
        setSearchQuery(value)
    }

    return (
        <div className="App">
            <PostForm create={createPost} />
            <hr style={{ margin: '15px 0' }} />
            <input
                value={searchQuery}
                onChange={(e) => onChange(e.target.value)}
                placeholder='Поиск' />
            <MySelect
                defaultValue={'Сортировка по ...'}
                value={sortedPost}
                onChange={sortPosts}
                options={[
                    { name: 'Сортировка по названию', value: 'title' },
                    { name: 'Сортировка по описанию', value: 'body' }
                ]}
            />
            {(sortedAndSearchedPosts.length)
                ? <PostList
                    posts={sortedAndSearchedPosts}
                    title={'Посты про JS'}
                    remove={removePost} />
                : <NotFound />
            }
        </div >
    );
}

export default App;
