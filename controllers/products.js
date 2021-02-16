const Product = require('../models/product')
// 99. ☝︎ Initialzes the the Product class and gives it a file path. 

exports.getAddProduct = (req, res, next) => {
  res.render('add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
   
  });
};

exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title)
  //  ☝︎ 99.Takes the data form the user for to make construct a new Product model.
  product.save()
  // 99. ☝︎ Saves the new Product object using the save function from the model class and pushes it into the products array.
  res.redirect('/');
};

exports.getProducts = (req, res, next) => {
  const products = Product.fetchAll()
  // 99. ☝︎ To get all the products, creat a local variable and use the fetchAll method on the Product model class.
  res.render('shop', {
    prods: products,
    pageTitle: 'Shop',
    path: '/',
   
  });
};
