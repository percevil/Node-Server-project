const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
  const products = adminData.products;
  // ↑↑ This line takes the products in adminData.products and injects (passes) them into our template ⬇︎⬇︎ to use.
  res.render('shop', { prods: products, docTitle: 'The Book Shop' });
  // ↑↑ This line renders the HTML from the file shop.pug. Then maps it to a js object {} key name (prods) and binds it to the variable (products). 
});

module.exports = router;
