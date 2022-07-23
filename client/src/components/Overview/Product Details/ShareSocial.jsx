/*
Below the product information, buttons should provide the ability to share this product on popular social media platforms.
Facebook
Twitter
Pinterest
*/

import React from 'react';
import { PinterestIcon, TwitterIcon, FacebookIcon, StyledIcons } from './ProductDetails.style.js'

function ShareSocial () {

  return (
    <StyledIcons>
        <FacebookIcon></FacebookIcon>
        <TwitterIcon></TwitterIcon>
        <PinterestIcon></PinterestIcon>
    </StyledIcons>
  )

}

export default ShareSocial