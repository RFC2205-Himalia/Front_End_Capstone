/*
The price is not actually derived from the product, but the style currently selected.
It should update dynamically with the user’s updates to style selected.
A default style will be designated for each product. This style should appear if no further selection has been made.
The price may be on sale.  If the SKU is currently discounted, then the sale price should appear in red,
followed by the original price which is struckthrough.
*/
import React from 'react';
import { useSelector } from 'react-redux';


function Price () {
  const styleList = useSelector((state) => state.stylesList.styles.results)
  console.log('Style List', styleList);
  const currentStyle = useSelector((state) => state.stylesList.currentStyle)
  console.log('currentStyle', currentStyle)
  let originalPrice = 0;
  let salePrice = null;

  if (styleList) {
    styleList.map((style, index) => {
      if(index === 2) {
        originalPrice = style.original_price
        salePrice = style.sale_price
        console.log('got prices', originalPrice, salePrice)
      }
    })
  }

//for refactoring consider using turnary (? :)
if (!salePrice) {
  return (
  <div>
    {originalPrice}
  </div>
  )
} else if (salePrice) {
  return (
    <div>
      <p><s>{originalPrice}</s></p>
      <font color="red">{salePrice}</font>
    </div>
  )
}




}

export default Price

