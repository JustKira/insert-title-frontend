import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

import {BrowserRouter} from 'react-router-dom'

import {Provider} from 'react-redux'
import {configureStore} from "@reduxjs/toolkit"

import { exampleSlice } from './redux/Example'

//start store
const store = configureStore({reducer: {
        example : exampleSlice
}})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <Navbar/>
                <App/>
                <Footer/>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function to
// log results (for example: reportWebVitals(console.log)) or send to an
// analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
