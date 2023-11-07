import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Students = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get('/api/students');
      setStudents(response.data);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  return (
    <div>
      <h2>List of Students</h2>
      <ul>
        {students.map((student) => (
          <li key={student._id}>
            {student.name} - Roll No: {student.rollNo}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Students;
