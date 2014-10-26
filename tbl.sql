CREATE TABLE IF NOT EXISTS persons(
id INTEGER AUTO_INCREMENT,
org INTEGER,
initials VARCHAR(100),
date_ DATE,
email VARCHAR(255),
phone VARCHAR(12),
skype VARCHAR(50),
PRIMARY KEY (id)
);

insert into persons(org,initials,date_, email,phone,skype)values(1,' lol lol lol',null,'lol@lol.lol','000000', 'lol')