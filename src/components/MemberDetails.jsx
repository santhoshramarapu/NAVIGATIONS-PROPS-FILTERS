import React from 'react';
import { useParams } from 'react-router-dom';

const MemberDetails = () => {
  const { id } = useParams();
  console.log(id, "id in params")

 
  const members = [
    { id: 1, name: 'John Doe', age: 30, email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', age: 25, email: 'jane@example.com' },
    { id: 3, name: 'Michael Johnson', age: 35, email: 'michael@example.com' },
    { id: 4, name: 'Emily Brown', age: 28, email: 'emily@example.com' },
    { id: 5, name: 'David Lee', age: 32, email: 'david@example.com' },
    { id: 6, name: 'Sarah Wilson', age: 27, email: 'sarah@example.com' },
    { id: 7, name: 'Robert Martinez', age: 40, email: 'robert@example.com' },
    { id: 8, name: 'Jennifer Taylor', age: 33, email: 'jennifer@example.com' },
    { id: 9, name: 'William Anderson', age: 29, email: 'william@example.com' },
    { id: 10, name: 'Jessica Thomas', age: 31, email: 'jessica@example.com' }
  ];

  const member = members.find(member => member.id === parseInt(id));

  return (
    <div>
      <h2>Member Details</h2>
      {member && (
        <div>
          <p><strong>Name:</strong> {member.name}</p>
          <p><strong>Age:</strong> {member.age}</p>
          <p><strong>Email:</strong> {member.email}</p>
        </div>
      )}
    </div>
  );
};

export default MemberDetails;
