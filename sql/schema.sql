-- sql/schema.sql

DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    password VARCHAR(150) NOT NULL,
    bio TEXT,
    role VARCHAR(50) DEFAULT 'user', -- e.g., user, manager, admin
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
