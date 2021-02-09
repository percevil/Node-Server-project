const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const products = [];

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
  res.render('add-product', { pageTitle: 'Add Product', path: "/admin/add-product" });
  // 
});// Used to be : sendFile(path.join(rootDir, 'views', 'add-product.html')
//85. path: (line#13) gives reference to line #21 in layouts/main-layout so that the js logic in that line will give the Shop link in the header the active class when that path is active.

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect('/');
});

exports.routes = router;
exports.products = products;
