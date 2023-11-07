import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div>
      <h2>Welcome to the Hostel Management System!</h2>
      <p>Here you can manage student records, hostel details, and more.</p>
    </div>
    
  );
};
<Link to="/add-student">Add Student</Link>

export default Home;
