const uuid = require('uuid/v1');
const Product = require('../models/Product');

exports.getAllProducts = (req, res) => {
  Product.find().then(
    (products) => {
      const listProducts = products.map((product) => {
        product.imageUrl = req.protocol + '://' + req.get('host') + '/images/' + product.imageUrl;
        return product;
      });
      res.status(200).json(listProducts);
    }
  ).catch(
    () => {
      res.status(500).send(new Error('Data fetch error!'));
    }
  );
};

exports.getOneProduct = (req, res) => {
  Product.findById(req.params.id).then(
    (product) => {
      if (!product) {
        return res.status(404).send(new Error('Product not found!'));
      }
      product.imageUrl = req.protocol + '://' + req.get('host') + '/images/' + product.imageUrl;
      res.status(200).json(product);
    }
  ).catch(
    () => {
      res.status(500).send(new Error('Product fetch error!'));
    }
  )
};

exports.orderProducts = (req, res) => {

  const { contact, products } = req.body;
  const { firstName, lastName, address, city, email } = contact
  if (!contact ||
    !firstName ||
    !lastName ||
    !address ||
    !city ||
    !email ||
    !products) {
    return res.status(400).send(new Error('Bad request!'));
  }
  let queries = [];
  for (let productId of req.body.products) {
    const queryPromise = new Promise((resolve, reject) => {
      Product.findById(productId).then(
        (product) => {
          if (!product) {
            reject('Product not found: ' + productId);
          }
          product.imageUrl = req.protocol + '://' + req.get('host') + '/images/' + product.imageUrl;
          resolve(product);
        }
      ).catch(
        () => {
          reject('Data fetch error!');
        }
      )
    });
    queries.push(queryPromise);
  }
  Promise.all(queries).then(
    (products) => {
      const orderId = uuid();
      return res.status(201).json({
        contact: req.body.contact,
        products: products,
        orderId: orderId
      })
    }
  ).catch(
    (error) => {
      return res.status(500).json(new Error(error));
    }
  );
};
