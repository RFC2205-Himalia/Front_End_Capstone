import React from 'react'
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SizeSelector from './SizeSelector.jsx';
import { setCurrentSkus } from '../../../Features/Styles.js';
import _, { each } from 'underscore';
import ShareSocial from '../Product Details/ShareSocial.jsx';


function AddCart () {
  const dispatch = useDispatch();
  const styleList = useSelector((state) => state.stylesList.styles.results)
  const currentStyle = useSelector((state) => state.stylesList.currentStyle)
  const currentSkus = useSelector((state) => state.stylesList.currentSkus)
  const [size, setSize] = useState({size: undefined, quantity: undefined});
  const [availableSizes, setAvailableSizes] = useState([])


  useEffect(() => {
    if (styleList) {
      var skus = styleList[currentStyle].skus
      dispatch(setCurrentSkus(skus))
    }
  }, [styleList]);

  // useEffect(() => {
  //   setAvailableSizes([])
  //   _.each(currentSkus, function(value, key, list){
  //     setAvailableSizes((availableSizes) => [...availableSizes, value.size]);
  //   })
  //   console.log("USE EFFECT TEST", currentSkus)
  // }, [currentSkus])





  return (
    <div>
      <span>
        <SizeSelector sizeState={{size: [size, setSize]}} availableSizesState={{availableSizes: [availableSizes, setAvailableSizes]}}/>
      </span>
      <div>
        <button style={indvButton}>Add to Cart</button>
      </div>
      <ShareSocial></ShareSocial>
    </div>
  )
}

export default AddCart

const buttons = {
  display: "flex",
  textAlign: "left",
  left: "18.5vw",
  width: "60vw",
  height: "75px",
  flexDirection: "row",
  marginLeft: "19vw",
  marginTop: "10px",
  marginBottom: "40px"
}

const indvButton = {
  fontWeight: "bold",
  maxWidth: "250px",
  // margin: "10px",
  maxHeight: "75px",
  backgroundColor: "#F0EAD6",
  //border: "1px solid black",
  padding: "10px",
  boxShadow: "1px 1px 5px gray"
}