import React from 'react';
import { GalleryThumbnail, CurrentGalleryThumbnail } from './DefaultView.style.js';

import { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { setCurrentPhoto } from '../../../Features/Styles.js';
import { useSelector } from 'react-redux';

function ImageGalleryThumbnail (props) {
  const dispatch = useDispatch();
  var currentPhoto = useSelector((state) => state.stylesList.currentPhoto)

  const changePhoto = () => {
    var newPhoto = props.photoNumber
    dispatch(setCurrentPhoto(newPhoto))
  }

  useEffect(() => {

  }, [props]);

  return (
    currentPhoto === props.photoNumber ?
   <CurrentGalleryThumbnail src={props.photo[props.photoNumber].url ? props.photo[props.photoNumber].url : props.photo[props.photoNumber].thumbnail_url} onClick={changePhoto}></CurrentGalleryThumbnail>
   : <GalleryThumbnail src= {props.photo[props.photoNumber].url ? props.photo[props.photoNumber].url : props.photo[props.photoNumber].thumbnail_url} onClick={changePhoto} ></GalleryThumbnail>
   )
}

export default ImageGalleryThumbnail


// function StyleThumbnail (props) {
//   const dispatch = useDispatch();
//   const styleList = useSelector((state) => state.stylesList.styles.results)
//   const currentStyle = useSelector((state) => state.stylesList.currentStyle)

//   const changeStyle = () => {
//     var newStyle = props.styleNumber
//     dispatch(setCurrentStyle(newStyle))
//   }

//   useEffect(() => {
//     dispatch(setCurrentSkus(styleList[currentStyle].skus));
//   }, [currentStyle]);



//   return (currentStyle === props.styleNumber ?
//   <CurrentStyledThumbnail src={props.style.photos[0].thumbnail_url} onClick={changeStyle}></CurrentStyledThumbnail>
//   : <StyledThumbnail src={props.style.photos[0].thumbnail_url} onClick={changeStyle}></StyledThumbnail>)
// }