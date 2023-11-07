import React, { useState } from 'react';
import axios from 'axios';

const AddStudent = () => {
  const [name, setName] = useState('');
  const [rollNo, setRollNo] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/students', { name, rollNo });
      console.log('New student created:', response.data);
      // Reset form fields
      setName('');
      setRollNo('');
    } catch (error) {
      console.error('Error creating student:', error);
    }
  };

  return (
    <div>
      <h2>Add New Student</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Roll No:</label>
          <input type="text" value={rollNo} onChange={(e) => setRollNo(e.target.value)} />
        </div>
        <button type="submit">Add Student</button>
      </form>
    </div>
  );
};

export default AddStudent;
