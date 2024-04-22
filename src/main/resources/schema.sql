CREATE TABLE Ticket
(
    id INTEGER AUTO_INCREMENT NOT NULL,
    movieSelector VARCHAR(255) NOT NULL,
    amount INTEGER NOT NULL,
    firstName VARCHAR(255) NOT NULL,
    lastName VARCHAR(255) NOT NULL,
    phoneNr INTEGER NOT NULL,
    email VARCHAR(255) NOT NULL,
    primary key (id)
);