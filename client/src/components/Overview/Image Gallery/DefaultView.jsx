import React from 'react';
import ImageGalleryThumbnail from './ImageGalleryThumbnail.jsx'
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'
import { useDispatch } from "react-redux";
import { StyledSlider, StyledImage, StyledRightArrow, StyledLeftArrow, LeftSplit, LeftArrowSplit, RightArrowSplit, CenterSplit } from './DefaultView.style.js';
import { setCurrentPhoto } from '../../../Features/Styles.js';

function DefaultView () {
  const dispatch = useDispatch();
  const styleList = useSelector((state) => state.stylesList.styles.results)
  const currentStyle = useSelector((state) => state.stylesList.currentStyle)
  const currentPhoto = useSelector((state) => state.stylesList.currentPhoto)

  if (styleList) {
    var photos = styleList[currentStyle].photos
    var length = photos.length;

    var nextSlide = () => {
      dispatch(setCurrentPhoto(currentPhoto === length - 1 ? 0 : currentPhoto + 1));
    }
    var prevSlide = () => {
      dispatch(setCurrentPhoto(currentPhoto === 0 ? length - 1 : currentPhoto - 1));
    }
  }

  useEffect(() => {
  }, [currentPhoto]);


  return (photos ?
   <StyledSlider >
    <StyledImage style={{backgroundImage: `url(${photos[currentPhoto].url ? photos[currentPhoto].url : photos[currentPhoto].thumbnail_url})` }}>
      <LeftSplit >
        {photos.map((photo, index) => {
          return <ImageGalleryThumbnail key={'ImageGalleryThumbnail-' + index} photo={photos} photoNumber={index} />
        })}
      </LeftSplit>
        <LeftArrowSplit>
          <StyledLeftArrow onClick={prevSlide}/>
        </LeftArrowSplit>
      <CenterSplit></CenterSplit>
      <RightArrowSplit>
        <StyledRightArrow onClick={nextSlide}/>
      </RightArrowSplit>
    </StyledImage>
  </StyledSlider>
  :
  <div>
    Loading images...
  </div>
  )
}

export default DefaultView