import { useState } from "react"
import Navbar from './components/Navbar'
import MainContent from './components/MainContent'
import './App.css'

function App() {

    const [darkMode, setdarkMode] = useState(true)

    function toggleDarkMode() {
        setdarkMode(prev => !prev)
    }

    return (
        <div className='container'>
            <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <MainContent darkMode={darkMode} />
        </div>
    )
}

export default App
