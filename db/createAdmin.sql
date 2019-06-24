insert into admins (username, password, email) 
VALUES (${username}, ${password}, ${email})
RETURNING *;