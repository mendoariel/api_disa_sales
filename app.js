const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
// const blogRoutes = require('./routes/blogRoutes');
const salesRoutes = require('./routes/salesRoutes')
const productRoutes = require('./routes/productRoutes')

const cors = require('cors')


// express app
const app = express();
app.use(cors())

// connect to mongodb & listen for requests
const dbURI = "mongodb+srv://albertoarielarce:estefin1986@cluster0.559nw.mongodb.net/note-tuts";

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => app.listen(3000))
  .catch(err => console.log(err));

// register view engine
app.set('view engine', 'ejs');

// middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});

// routes
// app.get('/', (req, res) => {
//   res.redirect('/blogs');
// });

// app.get('/about', (req, res) => {
//   res.render('about', { title: 'About' });
// });

// blog sales
app.use('/sales', salesRoutes);

app.use('/productos', productRoutes)


// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});