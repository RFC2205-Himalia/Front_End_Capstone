import React from 'react';
import { useSelector } from 'react-redux';
import { StyledDesc } from './ProductDetails.style.js';

function Details () {
const productDetails = useSelector((state) => state.addProduct.products.description)

  return (
    <div>
      <StyledDesc>{productDetails}</StyledDesc>
    </div>
  )
}

export default Details