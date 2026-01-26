-- Initialization script for Mastra
-- This file will be executed once during database setup

-- Create the mastra_user if it doesn't exist
SELECT 'CREATE USER mastra_user WITH PASSWORD ''mysecretpassword''' 
WHERE NOT EXISTS (SELECT FROM pg_catalog.pg_user WHERE usename = 'mastra_user')\gexec

-- Create the database if it doesn't exist
SELECT 'CREATE DATABASE mastra_local OWNER mastra_user' 
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'mastra_local')\gexec

-- Grant privileges
GRANT ALL PRIVILEGES ON DATABASE mastra_local TO mastra_user;