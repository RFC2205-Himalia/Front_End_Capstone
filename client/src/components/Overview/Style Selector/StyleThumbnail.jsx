import React from 'react';
import { useEffect } from 'react';
import { StyledThumbnail, CurrentStyledThumbnail } from './StyleSelector.style.js'
import { useDispatch } from "react-redux";
import { setCurrentStyle, setCurrentSkus } from '../../../Features/Styles.js';
import { useSelector } from 'react-redux';

function StyleThumbnail (props) {
  const dispatch = useDispatch();
  const styleList = useSelector((state) => state.stylesList.styles.results)
  const currentStyle = useSelector((state) => state.stylesList.currentStyle)

  const changeStyle = () => {
    var newStyle = props.styleNumber
    dispatch(setCurrentStyle(newStyle))
  }

  useEffect(() => {
    dispatch(setCurrentSkus(styleList[currentStyle].skus));
  }, [currentStyle]);



  return (currentStyle === props.styleNumber ?
  <CurrentStyledThumbnail src={props.style.photos[0].thumbnail_url} onClick={changeStyle}></CurrentStyledThumbnail>
  : <StyledThumbnail src={props.style.photos[0].thumbnail_url} onClick={changeStyle}></StyledThumbnail>)

}

export default StyleThumbnail