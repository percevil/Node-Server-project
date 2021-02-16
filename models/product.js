const fs = require('fs')
const path = require('path')
//  ☝︎ Calls the path module so it can work on all operating systems.

module.exports = class Product {
    constructor(name) {
        this.title = name 
    }
    save() {
        const p = path.join(path.dirname(process.mainModule.filename),
            'data', 'products.json')
        // ☝︎ Creating a path for the new file to be stored in using path.join and storing it in the 'p' variable.
        // The root directory being '(path.dirname(process.mainModule.filename) which leads to a 'data ' folder with the filename of 'products.json'

        fs.readFile(p, (err, fileContent) => {
            // ☝︎ To store products we need to get the list (array) of the existing products from the path (p). Then you will do something once read. We either get and error or we get the data in 'fileContent'.
            let products = []
        //   ☝︎ This array is kept in case we get an error from the if loop.
            if (!err) {
        // ☝︎ If I DON'T get an error, I want to read from the file that extracted.
                products = JSON.parse(fileContent)
        //      ☝︎ From the extracted file which has 'file content', I want to store it as a JSON file and then it 'parses' that data and gives us back an array/object or what evers in the file 'to fileContent'
            }
            products.push(this)
        // ☝︎ Appends the new file and pushes it to the file or the array, using 'this'.
        //  * Make sure an arrow function is used in 'fs.readFile...' so that 'this' keeps its reference to class.
            fs.writeFile(p, JSON.stringify(products), (err) => {
        //  ☝︎ This line initiates writing the data to the file path of 'p'.Then takes the JS object/array and converts it into a JSON.stringify Where it will take the 'products' array and finally writes it to the file. '(err)' is a callback to run the consolelog if there is an error
                console.log(err)
            })
        })
        
        
    }

    

    static fetchAll() {
        return products
    }
}