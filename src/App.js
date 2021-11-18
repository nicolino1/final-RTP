import logo from './logo.svg';
import './App.css';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import { Routes, Route, Link } from "react-router-dom";
import ThemeContext, {themes} from './theme-context';
import { useEffect, useState } from 'react';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme'));

  const changeTheme = () => {
    localStorage.getItem('theme') === 'light' ? 
      localStorage.setItem('theme', 'dark') 
      : 
      localStorage.setItem('theme', 'light')

    setTheme(localStorage.getItem('theme'));
    }
  

  return (
    <ThemeContext.Provider value={themes[theme]} >
      <Routes>
        <Route path="/" element={<Login changeTheme={changeTheme}/>} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </ThemeContext.Provider>
  );
}

export default App;
