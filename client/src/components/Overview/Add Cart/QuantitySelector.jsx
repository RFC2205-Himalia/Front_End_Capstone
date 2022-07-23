import React from 'react';
import { useState, useEffect } from 'react';


function QuantitySelector (props) {

const { size: [size, setSize] } = {
  size: useState({size: undefined, quantity: undefined}), ...(props.sizeState || {})
};

const [stockQuantity, setStockQuantity] = useState(undefined);

useEffect(() => {
  var iterableList = [];
  for (var i = 0; i < size.quantity; i++) {
    if(i < 15) {
      iterableList.push(i+1);
    }
  }
  if(size.size) {
    setStockQuantity([])
    setStockQuantity(stockQuantity => [...stockQuantity, ...iterableList]);
  }
}, [size]);



return ( size.quantity ?
  <select>
  {stockQuantity ? stockQuantity.map((quantity, index) => {
   return <option key={"specificQuantityDropdown-" + index}>{quantity}</option>
  }) : <option>OUT OF STOCK</option>}
 </select>
  :
  size.quantity === 0 ?
  <select>
    <option >
      OUT OF STOCK
    </option>
  </select>
  :
    <select disabled={true}>
    <option >
      -
    </option>
    </select>

)

  // switch (stockQuantity) {
  //   case undefined: { return (
  //   <select disabled={true}>
  //     <option >
  //       -
  //     </option>
  //   </select>
  //   )
  //   }
  //   case 0: {
  //     return (
  //     <select>
  //       <option>OUT OF STOCK</option>
  //     </select>
  //     )
  //   }
  //   default:
  //     return(
  //   <select>
  //    {stockQuantity ? stockQuantity.map((quantity, index) => {
  //     return <option key={"specificQuantityDropdown-" + index}>{quantity}</option>
  //    }) : <option>Loading Options</option>}
  //   </select>
  //     )
  // }
//   return (props.quantity ? <select>
//     <option>
//       {props.quantity}
//     </option>
//     </select>
//    : <select>
//     <option>
//       -
//     </option>
//    </select>)
// }

// {styleList.map((style, index) => {
//   return <StyleThumbnail key={'StyleThumbnail-' + index} style={style} styleNumber={index}/>
// })}

}
export default QuantitySelector;