// src/components/UserList.js
import React, { useEffect, useState } from 'react';
import { getAllUsers } from '../services/api';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const res = await getAllUsers();
      setUsers(res.data);
    }
    fetchUsers();
  }, []);

  return (
    <div className="p-5">
      <h2 className="text-2xl mb-5">All Users</h2>
      <ul className="space-y-2">
        {users.map(user => (
          <li key={user.id} className="border p-3 rounded">
            {user.first_name} {user.last_name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
