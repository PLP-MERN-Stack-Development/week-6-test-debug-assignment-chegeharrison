// UserList.jsx
import React, { useEffect, useState } from 'react';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('/api/users')  // Calls backend API
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <ul data-testid="user-list">
      {users.map((user) => (
        <li key={user._id}>{user.name}</li>
      ))}
    </ul>
  );
};

export default UserList;
