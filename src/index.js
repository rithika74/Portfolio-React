import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './Portfolio.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './Home';
import About from './About';
import Intro from './Intro';
import Work from './Work';
import Cards from './Cards';
import Contact from './Contact';
import Skills from './Skills';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}>
          <Route index element={<Intro/>}/>
          <Route path='intro' element={<Intro/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='work' element={<Cards/>}/>
          <Route path='skills' element={<Skills/>}/>

        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
