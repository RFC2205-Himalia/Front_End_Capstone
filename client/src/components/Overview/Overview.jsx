import React from 'react';
import axios from 'axios';
import ProductDetails from './Product Details/ProductDetails.jsx'
import StyleSelector from './Style Selector/StyleSelector.jsx'
import AddCart from './Add Cart/AddCart.jsx'
import DefaultView from './Image Gallery/DefaultView.jsx'

import { useDispatch } from "react-redux";
import { getStyles, setCurrentStyle } from '../../Features/Styles.js'
import { useEffect } from "react";



function Overview () {
  const dispatch = useDispatch();
  const product = '66658'
  //66643 for nulls
  //66644 for default clothing
  //66656 for one size (and can check if number auto switches on style change, currently no)
  //66658 for default shoes
  //66686 for out of stock
  const requests = (productID) => {
    axios.get(`http://localhost:3000/products/${productID}/styles`)
    .then((success) => {
      console.log("Styles", success)
      dispatch(getStyles(success.data))
      dispatch(setCurrentStyle(0))
    })
    .catch((error) => {
      console.log("error", error)
    })
  }

  useEffect(() => {
    requests(product);
  }, []);

    return (
    <div>
      <h1>Overview Component</h1>
      <ProductDetails data-testid="productDetails"/>
      <StyleSelector />
      <AddCart />
      <DefaultView />

    </div>
    )
}


export default Overview