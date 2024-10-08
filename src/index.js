import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Company } from './pages/BMS/Company'
import MainLayout from './layouts/MainLayout'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="company" element={<MainLayout><Company /></MainLayout>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

