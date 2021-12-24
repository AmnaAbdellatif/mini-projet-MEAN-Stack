const mongoose = require("mongoose");
const Product = require("./models/Product");
const fetch = require("node-fetch");
let resultData;
let saveCounter = 0;
const url = ['https://tech.dev.ats-digital.com/api/products?size=100']
url.map(async url => {
try{
   const response = await fetch(url);
   const json = await response.json();
   resultData = [...json.products];

   for (let i = 0; i < resultData.length; i++) {
      let product = new Product({
        productName: resultData[i].productName,
         description: resultData[i].description,
         price: resultData[i].price,
         category: resultData[i].category,
         imageUrl: resultData[i].imageUrl,
         reviews: resultData[i].reviews,

      })
   product.save(() => {
      console.log("saved" + product)
      
      saveCounter++;
  
      if (saveCounter === resultData.length) {
         mongoose.disconnect()
         .then(() => console.log("saved succesfully and mongodb   disconnected"))
         .catch(error => console.log(error));
         }
      });
   }
} catch (error) {
   console.log(error);
}
})