import React from 'react'
import { Route } from 'react-router-dom';
import { BrowserRouter, Routes } from 'react-router-dom';
import NavbarComp from './Components/NavbarComp';
import Company from './Pages/Company';
import Home from './Pages/Home';
import NewsInfo from './Pages/NewsInfo';
import Pricing from './Pages/Pricing';
import Services from './Pages/Services';

function App() {
  return (
    <div>
      <BrowserRouter>
      <NavbarComp />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/company' element={<Company />} />
        <Route path='/berita' element={<NewsInfo />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
