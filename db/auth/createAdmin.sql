insert into admins (password, email, username) 
VALUES ( ${password}, ${email}, ${username} )
RETURNING *;