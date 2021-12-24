var express = require('express');
var router = express.Router();
const Product = require("../models/Product");

/* GET users listing. */
router.get('/', async (req, res) => {
  // destructure page and limit and set default values
  const { page = 1, limit = 20 } = req.query;

  try {
    // execute query with page and limit values
    const products = await Product.find()
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();

    // get total documents in the Posts collection 
    const count = await Product.countDocuments();

    // return response with posts, total pages, and current page
    res.json({
      products,
      totalPages: Math.ceil(count / limit),
      currentPage: page
    });
  } catch (err) {
    console.error(err.message);
  }
})
;
router.get('/:id',(req, res) => {
  const id = req.params.id;

  Product.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not Product with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Tutorial with id=" + id });
    });
});
module.exports = router;
