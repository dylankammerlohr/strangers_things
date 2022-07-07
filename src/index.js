import React from 'react'
import ReactDOM from 'react-dom/client'
import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom'

import {getPost} from './api'

import {App} from './components'
import {UserPost} from './components'

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/posts"> 
                {/* <UserPost  */}
                UserPost = {UserPost}
                {/* /> */}
            </Route>
        </Routes>
        <App />
    </BrowserRouter>
    )