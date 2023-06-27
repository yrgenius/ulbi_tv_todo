import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from '../../pages/About.jsx';
import Posts from '../../pages/Posts.jsx';
import ErrorPage from '../../ErrorPage';
import PostIdPage from '../../pages/PostIdPage.jsx';

const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<Posts />} />
            <Route path='/about' element={<About />} />
            <Route path='/posts' element={<Posts />} />
            <Route path='/post/:id' element={<PostIdPage />} />
            <Route path='/error' element={<ErrorPage />} />
        </Routes>
    );
};

export default AppRouter;