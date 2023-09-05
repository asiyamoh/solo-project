
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE user (
    id SERIAL PRIMARY KEY,
    username VARCHAR(60) NOT NULL,
    password VARCHAR(90) NOT NULL
);

CREATE TABLE Fights (
    id SERIAL PRIMARY KEY,
    fighter_name VARCHAR(100) NOT NULL,
    opponents_name VARCHAR(100) NOT NULL,
    location VARCHAR(260) NOT NULL,
    winner BOOLEAN NOT NULL,
    member_id_1 INT REFERENCES "member" NOT NULL,
    member_id_2 INT REFERENCES "member" NOT NULL,
    fight_status VARCHAR(100) NOT NULL,
    accept_notes INTEGER NOT NULL,
    decline_notes INTEGER NOT NULL,
    fight_date DATE NOT NULL
);

CREATE TABLE Member (
    id SERIAL PRIMARY KEY,
    member_number INTEGER NOT NULL,
    first_name INTEGER NOT NULL,
    last_name INTEGER NOT NULL,
    birthdate DATE NOT NULL,
    gender VARCHAR(1) NOT NULL,
    weight_class INTEGER NOT NULL,
    region VARCHAR(20) NOT NULL,
    coach_id INT REFERENCES "user" NOT NULL
);

