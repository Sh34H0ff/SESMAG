-- sql/seed.sql

INSERT INTO users (first_name, last_name, email, password, bio, role)
VALUES 
  ('John', 'Doe', 'john.doe@example.com', 'password123', 'A passionate developer.', 'user'),
  ('Jane', 'Smith', 'jane.smith@example.com', 'password123', 'HR Manager and career coach.', 'manager'),
  ('Alice', 'Johnson', 'alice.johnson@example.com', 'password123', 'UX Designer focused on accessibility.', 'user'),
  ('Bob', 'Brown', 'bob.brown@example.com', 'password123', 'Admin overseeing company data.', 'admin');
