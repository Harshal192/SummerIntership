import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Students from './components/Students';
import AddStudent from './components/AddStudent';

const App = () => {
  return (
    <Router>
      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/students" element={<Students />} />
  <Route path="/add-student" element={<AddStudent />} />
  {/* Add more routes for other components/pages */}
</Routes>

    </Router>
  );
};

export default App;
