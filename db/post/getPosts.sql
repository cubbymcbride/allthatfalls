SELECT p.*, u.name as author
FROM post p
JOIN admins u ON p.user_id = u.id;