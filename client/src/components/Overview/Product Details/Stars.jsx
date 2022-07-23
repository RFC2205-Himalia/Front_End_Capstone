/*
Each product has an average rating based on its reviews.
The average rating of the product will be represented by an array of solid or outlined stars, where the number of solid stars represents the review score.
A total of 5 stars should always appear. The number of stars filled in should correspond to the average score.
The visual for rating should be representative of up to a quarter of a review point.
For example, if the average is 3.8, this should display as 3¾ solid stars and 1¼ outlined stars.
Next to the star rating, a link stating “Read all [#] reviews” will show.
The total number of reviews should be inserted in place of [#].
Clicking this link should scroll the page to the Ratings & Reviews module described in section 1.2.
If there are no reviews, this entire section should be hidden.
*/
import React from 'react';
import Stars from '../../Questions/Stars.jsx';

import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';


function ProductStars () {
  const reviewsFromStore = useSelector((state) => state.addReviews.reviews);
  const [AverageScore, setReviews] = useState(0);

  useEffect(() => {

  if (reviewsFromStore) {
    console.log('rating finder', reviewsFromStore[0]);
    var iterableList = [];
    var sum = 0;
    var count = 0;
    reviewsFromStore.forEach((element) => {
      console.log('element rating2 ', element.rating);
      iterableList.push(element.rating);
    })
    iterableList.forEach((element) => {
      sum += element;
      count += 1;
    })
    setReviews((sum/count));
  }
  },[reviewsFromStore])




  return ( AverageScore ?
       <Stars numStars={AverageScore}/>
    : <div>Placeholder no reviews</div>
    )

}



export default ProductStars;