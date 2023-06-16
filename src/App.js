import React, { useRef, useState } from 'react';
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

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
    }

    const removePost = (post) => {
        setPosts(posts.filter(el => el.id !== post.id));
    }

    const sortPosts = (sort) => {
        console.log(sort);
        setSelectedSort(sort);
        setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])));

    }

    return (
        <div className="App">
            <PostForm create={createPost} />
            <MySelect
                defaultValue={'Сортировка по ...'}
                options={[
                    { name: 'Сортировка по названию', value: 'title' },
                    { name: 'Сортировка по описанию', value: 'body' }
                ]}
                value={selectedSort}
                onChange={sortPosts}
            />
            {(posts.length)
                ? <PostList posts={posts} title={'Посты про JS'} remove={removePost} />
                : <NotFound />
            }
        </div >
    );
}

export default App;
