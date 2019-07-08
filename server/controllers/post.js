module.exports = {
    read: async (req, res) => {
        // try {
        //     let db = req.app.get('db')
        //     let posts = await db.post.getPosts()
        //     res.send(posts)
        // } catch (error) {
        //     console.log('error fetching posts:', error)
        //     res.status(500).send(error) 
        // }
        // this grabs data from the "db" established in index.js file
        let db = req.app.get('db')
        console.log('read part of comment controller', req.params)
        // this works because inside the db folder we have the nationalParks.db file
        db.post.getPosts().then((response) => {
            console.log(response)
            res.send(response)
        })

    },

    getPost: async (req, res) => {
        try {
            let db = req.app.get('db')
            let { id } = req.params 
            let posts = await db.post.getPosts
            let post = posts[0]
            res.send(post)
        } catch (error) {
            console.log('error fetching posts:', error)
            res.status(500).send(error)
        }
    },

    create: async (req, res) => {
            let db = req.app.get('db')
            // let { title, content } = req.body
            // if (!req.session.user)
            // return res.status(401).send('user not authenticated')
            // let { id: user_id } = req.session.user
            // let user_id = req.session.user.id
            await db.post.createPost(req.body).then(() => res.sendStatus(200))   
    },

    deletePost: (req, res) => {
        const db = req.app.get('db');
        const { id } = req.params;
        db.post.deletePost([+id]).then(resp => {
            res.status(200).send(resp);
        });
    },

    updatePost: (req, res) => {
        const db = req.app.get("db");
        console.log('comment controller req.params', req.params, req.body)
        const { title, content, img } = req.body;
        const { id } = req.params;
 
        db.post.updatePost({
          title, content, img, postId: +id
        })
        .then(() => res.status(200).send(content))
        .catch(err => {
            res.status(500).send({ errorMessage: "Something went wrong on update." });
            console.log(err)
          });
      }
}