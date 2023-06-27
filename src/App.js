import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Navbar from './components/UI/navbar/Navbar.jsx';
import AppRouter from './components/UI/approuter/AppRouter';
import './styles/style.css';
import './styles/input.css';


function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <AppRouter />
        </BrowserRouter>
    )
}

export default App;
