-- If you are using postgres, add your schema to this file
-- From the command line run psql -U dbuser -d dbname -a -f filename.sql
--  to create your database/ columns/ and some seed data
-- alternatively, open psql and copy and paste the code below
-- once you've made your schema


DROP DATABASE IF EXISTS new_database;

CREATE DATABASE new_database;

\c new_database;

CREATE TABLE new_database (
    message_id SERIAL,
    user_name TEXT,
    message_body TEXT
);



-- Seed your data with a collection of insert statements
-- INSERT INTO messages () VALUES ();