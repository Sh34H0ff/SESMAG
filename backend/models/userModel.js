// backend/models/userModel.js
const pool = require('../db');

const getAllUsers = async () => {
  const { rows } = await pool.query('SELECT id, first_name, last_name, email FROM users');
  return rows;
};

const getUserById = async (id) => {
  const { rows } = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
  return rows[0];
};

const updateUserById = async (id, data) => {
  const { first_name, last_name, bio } = data;
  await pool.query(
    'UPDATE users SET first_name = $1, last_name = $2, bio = $3 WHERE id = $4',
    [first_name, last_name, bio, id]
  );
};

const loginUser = async (email, password) => {
  const { rows } = await pool.query('SELECT * FROM users WHERE email = $1 AND password = $2', [email, password]);
  return rows[0];
};

module.exports = {
  getAllUsers,
  getUserById,
  updateUserById,
  loginUser,
};
