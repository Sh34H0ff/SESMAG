// src/components/ManagerDashboard.js
import React from 'react';
import UserList from './UserList';

function ManagerDashboard() {
  return (
    <div className="p-5">
      <h1 className="text-3xl mb-5">Manager Dashboard</h1>
      <UserList />
    </div>
  );
}

export default ManagerDashboard;
