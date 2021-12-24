import React from 'react'
import {
    useParams
  } from "react-router-dom";
export default function productDetail() {
    let { id } = useParams()
    useEffect(() => {
        fetch('http://localhost:3000/api/products/'+id)
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
            
        </div>
    )
}
