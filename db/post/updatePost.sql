UPDATE post
SET title = ${title},
    content = ${content},
    img = ${img}
WHERE id = ${id};

SELECT * FROM post;