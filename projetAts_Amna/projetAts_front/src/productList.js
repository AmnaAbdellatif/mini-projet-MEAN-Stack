import './App.css';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {
  Link
 } from "react-router-dom";

function ProductList() {
 const [products,setProducts] = useState([]);
 const [total, setTotal] = useState(0);
  useEffect(() => {
     fetch('http://localhost:3000/api/products')
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }    response.json().then(function(data) {
        console.log(data);
        setProducts(data.products)
        setTotal(data.totalPages)
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });
  }, [])
  return (
    <div>
      <div className='container'>
        {products.map(product =>(
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={product.imageUrl}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.productName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          `description: ${product.description}
          price: ${product.price}
          review:${product.reviews.reduce(function (previousValue, currentValue) {
      return previousValue + currentValue.value
    }, 0)/product.reviews.length} `
        </Typography>
        
        
      </CardContent>
      <CardActions>
        <Link to ={`/products/${product._id}`}>View</Link>

      </CardActions>
    </Card>))

        }
      </div>
    <Stack spacing={2}>
      <Pagination count={total} color="primary" />
      
    </Stack>
    </div>
    
  );
}

export default ProductList;
