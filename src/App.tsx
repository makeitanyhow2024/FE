import Home from 'pages/Home';
import Party from 'pages/Party';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

// import Home from '@pages/Home/index';
// import Party from '@pages/Party';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<Party />} />
    </Routes>
  );
}

export default App;
