import React, { useEffect, useState } from 'react';
import PostService from "../../API/PostService";
import { useFetching } from "../../hooks/useFetching";
import { usePosts } from '../../hooks/usePosts';
import { getPagesCount } from "../../utils/pages";
import PostForm from '../PostForm.jsx';
import PostList from '../PostList.jsx';
import MyButton from '../UI/button/MyButton';
import MyModal from '../UI/modal/MyModal';
import PostFilter from '../PostFilter';
import Loader from "../UI/loader/Loader";
import Pagination from '../UI/pagination/Pagination.jsx';
import '../../styles/input.css';
import '../../styles/style.css';


function Posts() {

    const [posts, setPosts] = useState([
        // { id: 1, title: 'JavaScript 1', body: 'Description' },
        // { id: 2, title: 'JavaScript 2', body: 'Description' },
        // { id: 3, title: 'JavaScript 3', body: 'Description' },
    ]);
    const [filter, setFilter] = useState({ sort: '', query: '' });
    const [modal, setModal] = useState(false);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
    const [totalPage, setTotalPage] = useState(0);
    const [limit] = useState(10);
    const [page, setPage] = useState(1);
    const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
        const response = await PostService.getAll(limit, page);
        console.log(response);
        setPosts(response.data);
        const totalCount = response.headers['x-total-count'];
        setTotalPage(getPagesCount(totalCount, limit));
    });

    const changePage = (page) => {
        setPage(page);
    }

    useEffect(() => {
        fetchPosts();
    }, [page]);

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
        setModal(false);
    }

    const removePost = (post) => {
        setPosts(posts.filter(el => el.id !== post.id));
    }

    return (
        <div className="App">
            <button onClick={fetchPosts}>get posts</button>
            <MyButton style={{ marginTop: '20px' }} onClick={() => setModal(true)}>
                Создать пользователя
            </MyButton>
            <MyModal
                visible={modal}
                setVisible={setModal}>
                <PostForm create={createPost} />
            </MyModal>
            <hr style={{ margin: '15px 0' }} />
            <PostFilter
                filter={filter}
                setFilter={setFilter} />
            {
                postError &&
                <h1>Произошла ошибка</h1>
            }
            {
                isPostLoading
                    ? <Loader />
                    : <PostList
                        title={'Посты про JS'}
                        posts={sortedAndSearchedPosts}
                        remove={removePost} />
            }
            <Pagination totalPage={totalPage} page={page} changePage={changePage} />

        </div >
    );
}

export default Posts;
