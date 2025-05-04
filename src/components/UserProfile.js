// src/components/UserProfile.js
import React, { useState, useEffect } from 'react';
import { getUserProfile, updateUserProfile } from '../services/api';

function UserProfile() {
  const [user, setUser] = useState({});
  const userId = 1; // Example, you can get from context/token

  useEffect(() => {
    async function fetchUser() {
      const res = await getUserProfile(userId);
      setUser(res.data);
    }
    fetchUser();
  }, []);

  const handleChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value});
  };

  const handleSubmit = async () => {
    await updateUserProfile(userId, user);
    alert('Profile updated!');
  };

  return (
    <div className="p-5">
      <h2 className="text-2xl mb-5">My Profile</h2>
      <input
        name="first_name"
        value={user.first_name || ''}
        onChange={handleChange}
        placeholder="First Name"
        className="border p-2 mb-2 w-full"
      />
      <input
        name="last_name"
        value={user.last_name || ''}
        onChange={handleChange}
        placeholder="Last Name"
        className="border p-2 mb-2 w-full"
      />
      <textarea
        name="bio"
        value={user.bio || ''}
        onChange={handleChange}
        placeholder="Bio"
        className="border p-2 mb-2 w-full"
      />
      <button onClick={handleSubmit} className="bg-green-500 text-white p-2 rounded">Save Changes</button>
    </div>
  );
}

export default UserProfile;
