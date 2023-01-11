import logo from './logo.svg';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Main from './components/main/Main';
import Home from './page/Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

function App() {
  const [navbar,setNavbar] = useState("");

 

  return (
    <div className='App'>
    <Routes>
    <Route path="/" element = {<Home navbar={navbar} setNavbar={setNavbar} />} />
    <Route path={`/${navbar}`} element = {<Home navbar={navbar} setNavbar={setNavbar} />} />

    </Routes>
    </div>
  );
}

export default App;
