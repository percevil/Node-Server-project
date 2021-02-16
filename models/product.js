const { static } = require("express");

const products = [];

module.exports = class Product {
    constructor(name) {
        this.title = name 
    }
    save() {
        products.push(this)
    }
    static fetchAll() {
        return products
    }
}