/*

Below the product information, the user should be presented all the styles of the product and have the ability to toggle between them.
Each style should be displayed as a thumbnail.
All styles should display for the current product at all times. There is no limit to the number of styles a product can have.
The thumbnails should appear in rows of 4.
The current selection should be indicated within the list by the overlay of a checkmark on top of the thumbnail for that style.
Additionally, the title for that style should appear typed out in full above the thumbnail list.
A user will be able to change the selected style by clicking on the thumbnail displaying that style.
Clicking on the thumbnail for the currently selected style will have no impact.
By default, the style selected will be the first in the list.
A product will always have at least one style.
Only one style can be selected at a time. A style must be selected at all times.

*/

import React from 'react';
import { useSelector } from 'react-redux';
import StyleThumbnail from './StyleThumbnail.jsx'
import { StyledStyleGrid, CurrentStyleText } from './StyleSelector.style.js'


function StyleSelector () {
  const styleList = useSelector((state) => state.stylesList.styles.results)
  console.log('Style List', styleList);
  const currentStyle = useSelector((state) => state.stylesList.currentStyle)

  return (styleList ? (
    <div>
      <CurrentStyleText style={{color: "#F0EAD6"}}><b>Selected Style {">"} </b> {styleList[currentStyle].name}</CurrentStyleText>
      <StyledStyleGrid>
        {styleList.map((style, index) => {
          return <StyleThumbnail key={'StyleThumbnail-' + index} style={style} styleNumber={index}/>
        })}
      </StyledStyleGrid>
    </div>
  ) : <div>Styles are not loaded yet</div>)

}

export default StyleSelector