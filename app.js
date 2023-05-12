const express = require('express');
const cors = require('cors')
// const csruf = require('csurf')
// const cookieParser = require('cookie-parser');
const session = require('express-session');
const methodOvveride = require('method-override');
const {validationResult} = require('express-validator')


const pageRoutes = require('./Routes/pageRoutes')
const ValidatRoutes = require('./Routes/ValidatRoutes')

const app = express();
mongoURL =
  'mongodb+srv://burakyabgu:123@cluster0.8ciljw0.mongodb.net/?retryWrites=true&w=majority';
// app.use(cookieParser())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  methodOvveride('_method', {
    methods: ['POST', 'GET'],
  })
);

app.use(
  session({
    secret: 'my_keyboard_cat',
    resave: false,
    saveUninitialized: true,
  })
);

app.use(cors({
  origin: true,
}))

// app.use(csruf())
app.set('view engine', 'ejs');


app.use(pageRoutes)
app.use(ValidatRoutes)

// app.get('/view/:slug', (req, res) => {
//   res.render('SlugView', {
//     parametre: req.params.slug,
//     _csrf: req.csrfToken()
//   });
// });

// console.log(__filename);

// console.log(path.dirname(__filename));
// console.log(path.extname('index.html'));

// console.log(path.extname(__filename));
// console.log(path.join(__dirname , 'css', 'stil.css'));
// console.log(path.normalize(__dirname + '/../..'));

// app.get('/addUser', (req,res)=>{
//     res.render('cookieTest')
// })

// app.post('/cookieAdd', (req,res)=>{
//     console.log(req.body)
//     const {username, lastname} = req.body;
//     res.cookie('username', username)
//     res.cookie('lastname', lastname)
//     console.log(req.body.username, req.body.lastname)

//     res.send('tamam')

// })

// app.get('/cookiesView', (req,res)=>{
//     res.render('cookiesView', {
//         username: req.cookies.username,
//         lastname: req.cookies.lastname
//     })
// })

// app.get('/cookieDelete', (req,res)=>{
//     res.clearCookie('username')
//     res.send('xd')
// })

app.post('/uyeOl', (req,res)=>{
	console.log(req.body)
	const {username, lastname} = req.body;
	res.send('tamam')
})

app.listen(80);
