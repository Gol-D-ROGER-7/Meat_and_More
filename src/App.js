import React from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import Team from './components/Team';
import Events from './components/Events';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/our-specials' element={<Menu />} />
        <Route path='/team' element={<Team />} />
        <Route path='/events' element={<Events />} />
      </Routes>
    </>
  );
}

export default App;
