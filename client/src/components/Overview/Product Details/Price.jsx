/*
The price is not actually derived from the product, but the style currently selected.
It should update dynamically with the user’s updates to style selected.
A default style will be designated for each product. This style should appear if no further selection has been made.
The price may be on sale.  If the SKU is currently discounted, then the sale price should appear in red,
followed by the original price which is struckthrough.
*/
import React from 'react';
import { useSelector } from 'react-redux';
import { StyledPrice } from './ProductDetails.style.js'
import { ShareSocial } from './ShareSocial.jsx'


function Price () {
  const styleList = useSelector((state) => state.stylesList.styles.results)
  const currentStyle = useSelector((state) => state.stylesList.currentStyle)
  let originalPrice = 0;
  let salePrice = null;

  if (styleList) {
    styleList.map((style, index) => {
      if(index === currentStyle) {
        originalPrice = style.original_price
        salePrice = style.sale_price
      }
    })
  }

if (!salePrice) {
  return (
  <StyledPrice>
    ${originalPrice}
  </StyledPrice>
  )
} else if (salePrice) {
  return (
    <StyledPrice>
      <span><s>${originalPrice}</s></span>
      <span style={{color: "red"}}> ${salePrice}</span>
    </StyledPrice>
  )
}

}

export default Price

