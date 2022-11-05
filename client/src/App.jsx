import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import LandingPage from './components/LandingPage'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element = {<LandingPage/>} path="/" />
            </Routes>
        </BrowserRouter>
    )
}

export default App