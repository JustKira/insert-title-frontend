import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import {configureStore} from "@reduxjs/toolkit"
import  userSlice  from './redux/user'
import postsSlice from './redux/posts'
//
// import { configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import { PersistGate } from 'redux-persist/integration/react';

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, userSlice)

 const store = configureStore({
  reducer: {persistedReducer,posts:postsSlice},
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk]
})

 const persistor = persistStore(store)


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
              <PersistGate loading={null} persistor={persistor}>
                  <Navbar/>
                  <App/>
                  <Footer/>
              </PersistGate>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
);
