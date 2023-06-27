import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import About from '../../pages/About.jsx';
import Posts from '../../pages/Posts.jsx';
import ErrorPage from '../../ErrorPage';

const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<Posts />} />
            <Route path='/about' element={<About />} />
            <Route path='/posts' element={<Posts />} />
            <Route path='/error' element={<ErrorPage />} />
            <Route path="/*" element={<Navigate to="/error" replace />} />
        </Routes>
    );
};

export default AppRouter;