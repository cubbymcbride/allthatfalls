module.exports = {
    read: async (req, res) => {
        try {
            let db = req.app.get('db')
            let posts = await db.getPosts()
            res.send(posts)
        } catch (error) {
            console.log('error fetching posts:', error)
            res.status(500).send(error) 
        }
    },

    getPost: async (req, res) => {
        try {
            let db = req.app.get('db')
            let { id } = req.params 
            let posts = await db.post.getPost(id)
            let post = posts[0]
            res.send(post)
        } catch (error) {
            console.log('error fetching posts:', error)
            res.status(500).send(error)
        }
    },

    create: async (req, res) => {
        
            console.log(11111111, req.body)
            let db = req.app.get('db')
            // let { title, content } = req.body

            // if (!req.session.user) 
            // console.log(111111, req.session.user)
            //     return res.status(401).send('user not authenticated')
            

            // let { id: user_id } = req.session.user
            // let user_id = req.session.user.id
            await db.post.createPost(req.body).then(() => res.sendStatus(200))
            
        
            
        
    },

    deletePost: (req, res) => {
        const db = req.app.get('db');
        const { id } = req.params;

        db.post.deletePost([id]).then(resp => {
            res.status(200).send(resp);
        });
    },

    updatePost: (req, res) => {
        const db = req.app.get('db');
        const { id } = req.params;
        const { item } = req.body;

        db.post.updatePost([id, item]).then(resp => {
            res.status(200).send(resp)
        })
    }
}