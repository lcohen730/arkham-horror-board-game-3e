import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';

export default function App() {  
  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </main>
  );
}