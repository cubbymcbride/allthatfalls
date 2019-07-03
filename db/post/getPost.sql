SELECT p.*, u.username as author
FROM post p
JOIN admins u ON p.user_id = u.user_id; 
WHERE p.post_id = $1;