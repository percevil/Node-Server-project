const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');

const app = express();

// app.engine('handlebars', expressHBS());
//87. ☝︎ Registers handle bars for use with Express. ExpressHBS() needs match names with line #5 and needs to be a function as well.
app.set('view engine', 'ejs');
// 87. ☝︎ Sets 'ejs' or other templating engine for use as the templating engine we are using now (from pug).
app.set('views', 'views');
// 92.☝︎ This line isnt needed if youre using views as the default folder.

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.getError);

app.listen(3000);
