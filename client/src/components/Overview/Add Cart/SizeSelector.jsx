import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import QuantitySelector from './QuantitySelector.jsx';
import _, { each } from 'underscore';

function SizeSelector (props) {
  //setting the passed down useState props
  const { size: [size, setSize] } = {
    size: useState({size: undefined, quantity: undefined}), ...(props.sizeState || {})
  };
  const { availableSizes: [availableSizes, setAvailableSizes]} = {
    availableSizes: useState([]), ...(props.availableSizesState || [])
  };

  const [showText, setShowText] = useState(true);
  const [state, setState] = useState(0);
  const currentSkus = useSelector ((state) => state.stylesList.currentSkus);

  const styleList = useSelector((state) => state.stylesList.styles.results)
  const currentStyle = useSelector((state) => state.stylesList.currentStyle)

  const sizeListener = (event) => {
    var updatedSize = event.target.value
    _.each(currentSkus, function(value, key, list){
      if (value.size === updatedSize) {
        setSize({...size, size: updatedSize, quantity: currentSkus[key].quantity})
        setShowText(false);
      }
    })
  }


  useEffect(() => {
    setAvailableSizes([])
    _.each(currentSkus, function(value, key, list){
      setAvailableSizes((availableSizes) => [...availableSizes, value.size]);
    })
  }, [currentSkus]);

  return ( styleList ?
    <div>
      <select value={size.size} onChange={sizeListener}>
        <option value='Select Size'>Select Size</option>
        <option>{styleList[currentStyle].name}</option>
        {availableSizes.map((size, index) => {
          return <option key={"key" + index} value={size} name={currentSkus}>{size}</option>
        })}
      </select>
    <QuantitySelector sizeState={{size: [size, setSize]}} />
    </div>
    :
   <div></div>
  )
}

export default SizeSelector;

const indvButton = {
  fontWeight: "bold",
  maxWidth: "250px",
  margin: "10px",
  maxHeight: "75px",
  backgroundColor: "#F0EAD6",
  //border: "1px solid black",
  padding: "10px",
  boxShadow: "1px 1px 5px gray"
}