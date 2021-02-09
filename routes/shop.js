const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
  const products = adminData.products;
  // ↑↑ This line takes the products in adminData.products and injects (passes) them into our template ⬇︎⬇︎ to use.
  res.render('shop', { prods: products, pageTitle: 'The Book Shop', path: "/"});
  // ↑↑ This line renders the HTML from the file shop.pug. Then maps it to a js object {} key name (prods) and binds it to the variable (products). 
 
}); // 85. Path: (line#13) gives reference to line #17 in layouts/main-layouts so that thew js logic in that line will give the Shop link in the header the active class when that class is active.

module.exports = router;
