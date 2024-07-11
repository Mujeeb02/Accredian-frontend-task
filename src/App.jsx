import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';

function App() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Routes>
      <Route path="/" element={<Home open={open} handleOpenModal={handleOpen} handleCloseModal={handleClose} />} />
    </Routes>
  );
}

export default App;
