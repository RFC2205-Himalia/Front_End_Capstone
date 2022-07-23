import React from "react";
import Overview from './components/Overview/Overview.jsx';
import Questions from './components/Questions/Questions.jsx';
import Reviews from './components/Review/ReviewWidget.jsx';
import Similar from './components/Similar/Similar.jsx';
import axios from "axios";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { tracker } from "./Features/questions.js";
import { addProduct } from "./Features/addProduct.js"
import { addReviews, addAvgScore, addReviewMeta } from "./Features/addReviews.js"







function App () {
  const dispatch = useDispatch();
  var product = '66644'

  const requests = (productID) => {
    axios.get(`/products/${productID}`)
    .then((success) => {
      // console.log("success", success)
      dispatch(addProduct(success.data))
    })
    .catch((error) => {
      // console.log("error", error)
    })

    axios.get(`/reviews?product_id=${productID}`)
    .then((success) => {
      dispatch(addReviews(success.data));

      //going to crunch the numbers for avg review score here but I wonder if were allowed
      // to do this in the mini server between the API call and the client
      let aggregateReviewScore = 0;

      success.data.results.forEach((element) => {
        aggregateReviewScore += element.rating;
      })
      dispatch(addAvgScore(aggregateReviewScore/success.data.results.length));
    })
    .catch((err) => {
      console.log(err);
    })

    axios.get(`/reviews/meta?product_id=66670`)
    .then((success) => {
      dispatch(addReviewMeta(success.data));
    })
    .catch((err) => {
      console.log(err);
    })
  }

  useEffect(() => {
    requests(product);
  }, []);

    return (
      <AppWrapper onClick={(e) => dispatch(tracker({
        element: e.target.getAttribute('element'),
        widget: e.target.getAttribute('widget'),
        time: `${new Date}`
      }))}>
          <Overview/>
          <Questions productID={product}/>
          <Reviews/>
          <Similar/>
      </AppWrapper>
    )
}


const AppWrapper = styled.div`
  background: #2a2a2a;
`;

export default App;


