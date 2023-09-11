
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    id SERIAL PRIMARY KEY,
    username VARCHAR(60) NOT NULL,
    password VARCHAR(90) NOT NULL,
    first_name VARCHAR(90) NOT NULL,
    last_name VARCHAR(90) NOT NULL,
    email VARCHAR(180),
    phone_number VARCHAR(180)
);

CREATE TABLE Member (
    id SERIAL PRIMARY KEY,
    member_number INTEGER NOT NULL,
    firstname VARCHAR(100) NOT NULL,
    lastname VARCHAR(100) NOT NULL,
    birthdate DATE NOT NULL,
    gender VARCHAR(10) NOT NULL,
    weight_class INTEGER NOT NULL,
    region VARCHAR(50) NOT NULL,
    coach_id INT REFERENCES "user" NOT NULL
);


CREATE TABLE Fights (
    id SERIAL PRIMARY KEY,
    winner BOOLEAN NOT NULL,
    member_id_1 INT REFERENCES "member" NOT NULL,
    member_id_2 INT REFERENCES "member" NOT NULL,
    fight_status VARCHAR(100) NOT NULL,
    accept_notes VARCHAR(150),
    decline_notes VARCHAR(150),
    fight_date INT REFERENCES "dates" NOT NULL
);


CREATE TABLE dates (
    id SERIAL PRIMARY KEY,
    location varchar(500) NOT NULL,
    fight_dates date NOT NULL,
    weigh_in_time time NOT NULL,
    show_time time NOT NULL
);
