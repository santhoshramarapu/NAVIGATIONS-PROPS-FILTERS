import React from 'react';
import { Link } from 'react-router-dom';

const MemberList = () => {
  const members = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Michael Johnson' },
    { id: 4, name: 'Emily Brown' },
    { id: 5, name: 'David Lee' },
    { id: 6, name: 'Sarah Wilson' },
    { id: 7, name: 'Robert Martinez' },
    { id: 8, name: 'Jennifer Taylor' },
    { id: 9, name: 'William Anderson' },
    { id: 10, name: 'Jessica Thomas' }
  ];

  return (
    <div>
      <h2>Member List</h2>
      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member, index) => (
            <tr key={member.id}>
              <td>{index + 1}</td>
              <td><Link to={`/member/${member.id}`}>{member.name}</Link></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MemberList;
