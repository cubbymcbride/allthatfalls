UPDATE post
SET title = ${title},
    content = ${content},
    img = ${img}
    
WHERE post_id = ${postId};

SELECT * FROM post;