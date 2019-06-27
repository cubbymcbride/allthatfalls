const bcrypt = require('bcryptjs')

module.exports = {
    register: async (req, res) => {
        try {
        const db = req.app.get('db')
        const { email, password } = req.body

        let admins = await db.auth.findAdminByEmail(email)
        let admin = admins[0]

        if (admin) {
            return res.status(409).send('email already in db')
        }

        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)

       let response = await db.auth.createAdmin({email, password: hash})
       
       let newadmin = response[0]
       delete newadmin.password
       req.session.admin = newadmin
       res.send(req.session.admin)
            
        } catch (error) {
            console.log('there was an error', error)
            res.status(500).send(error)
        }
    },

    login: async (req, res) => {
        try {
            const db = req.app.get('db')
        const { email, password, } = req.body
        const { session } = req;

        let admins = await db.auth.findAdminByEmail(email)
        let admin = admins[0]

        if (!admin) {
            return res.status(401).send('email or password incorrect')
        }

        let isAuthenticated = bcrypt.compareSync(password, admin.password)
       

        if (isAuthenticated) {
            delete admin.password;
            session.admin = admin
            res.status(200).send(session.admin)} else {
            return res.status(401).send('email or password incorrect')
        } 

        delete admin.password
        req.session.admin = admin
        res.send(req.session.admin)

        } catch (error) {
            console.log('there was an error', error)
            res.status(500).send(error)
        }       
    },

    logout: (req, res) => {
        req.session.destroy()
        res.sendStatus(200)
    },

    currentAdmin: (req, res) => {
        res.send(req.session.admin)
    }
}