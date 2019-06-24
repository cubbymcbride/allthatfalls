create table admins (
user_id serial primary key,
username varchar(500),
password varchar(500),
email varchar(500)
);

create table merch (
merch_id serial primary key,
name varchar(500),
style varchar(500),
price int
);

create table post (
post_id serial primary key,
title varchar(500),
content varchar(5000000),
img varchar(5000),
user_id int references admins(user_id)
);

create table member (
member_id serial primary key,
name varchar(500),
position varchar(500),
picture text,
bio text,
user_id int references admins(user_id)
); 

create table songs (
song_id serial primary key,
title varchar(500),
album_id int references album(album_id),
file_type text
);
 
create table album (
album_id serial primary key,
title varchar(500)
);