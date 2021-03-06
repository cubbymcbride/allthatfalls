require("dotenv").config();
const express = require("express");
const session = require("express-session");
const massive = require("massive");

const AuthCtrl = require('./controllers/auth')
const PostCtrl = require('./controllers/post')

const app = express()

const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('db is connected')
    app.listen(SERVER_PORT, () => console.log('port on', SERVER_PORT))
  })

app.use(express.json());
app.use( express.static( `${__dirname}/../build` ) );
app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 365
    }
  })
);

app.post('/auth/register', AuthCtrl.register)
app.post('/auth/login', AuthCtrl.login)
app.post('/auth/logout', AuthCtrl.logout)
app.get('/auth/currentAdmin', AuthCtrl.currentAdmin)

app.get('/api/post', PostCtrl.read)
app.get('/api/post/:id', PostCtrl.getPost)
app.post('/api/post', PostCtrl.create)
app.delete('/api/post/:id', PostCtrl.deletePost)
app.put('/api/post/:id', PostCtrl.updatePost)