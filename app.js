const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
// const expressHBS = require('express-handlebars');
//87.☝︎ Importing Handle bars. DId not need to do for PUG.

const app = express();
// app.engine('handlebars', expressHBS());
//87. ☝︎ Registers handle bars for use with Express. ExpressHBS() needs match names with line #5 and needs to be a function as well.
app.set('view engine', 'ejs');
// 87. ☝︎ Sets 'handlebars' as the templating engine we are using now (from pug).
app.set('views', 'views');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).render('404', {pageTitle: '404... Page Not Found'});
    // Used to be here ☝︎.sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);
