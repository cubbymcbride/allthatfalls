insert into admins (password, email) 
VALUES ( ${password}, ${email} )
RETURNING *;