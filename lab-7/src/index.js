import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './pages/dashboard.jsx'
import Page1 from './pages/page1.jsx'
import Page2 from './pages/page2.jsx'
import Page3 from './pages/page3.jsx'

ReactDOM.render(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
    <Route path="dashboard" element={<Dashboard />} />
        <Route path="page1" element={<Page1 />} />
           <Route path="page2" element={<Page2 />} />
             <Route path="page3" element={<Page3 />} />

      </Routes>
    </BrowserRouter>,

  
  document.getElementById('root'),
);



