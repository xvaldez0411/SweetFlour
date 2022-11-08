import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Gallery from './components/Gallery'
import LandingPage from './components/LandingPage'
import Signature from './components/Signature'
import Custom from './components/Custom'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element = {<LandingPage/>} path="/" />
                <Route element = {<Signature/>} path = "/signature/order" />
                <Route element = {<Custom/>} path = "/custom/order" />
                <Route element = {<Gallery/>} path = "/gallery" />
            </Routes>
        </BrowserRouter>
    )
}

export default App