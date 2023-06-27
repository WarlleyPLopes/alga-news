import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import './index.css';
import reportWebVitals from './reportWebVitals';
import CalcView from './views/Calc.view';
import Contact from './views/Contact.view';
import Home from './views/Home.view';
import NotFound404 from './views/NotFound404.view';
import UserView from './views/User.view';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>

    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path={'/usuario/:userId'} element={<UserView />} />
        <Route path={'/calc/:a/:b'} element={<CalcView />} />
        <Route path="*" element={<NotFound404 />} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
