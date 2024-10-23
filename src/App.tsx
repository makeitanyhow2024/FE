import Home from 'pages/Home';
import Party from 'pages/Party';
import CreateParty from 'pages/Party/CreateParty';
import DetailPage from 'pages/Party/DetailPage';
import Restaurant from 'pages/Restaurant';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

// import Home from '@pages/Home/index';
// import Party from '@pages/Party';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/party" element={<Party />} />
      <Route path="/party/detail" element={<DetailPage />} />
      <Route path="/party/create" element={<CreateParty />} />

      <Route path="/restaurant" element={<Restaurant />} />
      {/* <Route path="/my" element={<My />} /> */}
    </Routes>
  );
}

export default App;
