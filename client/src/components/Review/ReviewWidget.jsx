import React from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import styled from "styled-components";

import ReviewList from './ReviewList.jsx';
import ReviewSummary from "./ReviewSummary.jsx";

import sampleData from "./ReviewSampleData.js"


function ReviewWidget () {
  const reviewsFromStore = useSelector((state) => state.addReviews.reviews);
  let [reviews, setReviews] = useState([]);
  let [filters, setFilters] = useState([]);


  useEffect(() => {
    setReviews(reviewsFromStore);
  },[reviewsFromStore])

  useEffect(() => {
    filterReviewsByStar();
  },[filters])

  let filterReviewsByStar = () => {
    let results = []

    reviewsFromStore.forEach((element) => {
      filters.forEach(filter => {
        if(filter === element.rating){
          results.push(element);
        }
      })
    })

    // console.log(results);
    setReviews(results);
  }

  let orderReviews = (orderBy) => {
    let results = []

    switch (orderBy){
      case "Helpfulness":
        break;
      case "Newest":
        break;
      case "Relevant":
        break;
      default:
        break;
    }
  }

  let addFilters = (star) => {
    // console.log(star);
    let tempFilters = [];

    filters.forEach((element) => {
      tempFilters.push(element);
    })


    if(tempFilters.includes(star)){
      tempFilters.splice(tempFilters.indexOf(star),1);
    } else {
      tempFilters.push(star);
    }

    setFilters(tempFilters);
    // console.log(filters);
  }

    return (
      <Wrapper className="ReviewWrapper">
        <Title>Ratings & Reviews</Title>
        <Parent>
          <ReviewSummary  filterReviews={addFilters}/>
          <ReviewList style={{justifyContent: "center"}} sortReviews={orderReviews} reviews={reviews}/>
        </Parent>
      </Wrapper>
    )
}


const Title = styled.h2`
  font-weight: 100;
  font-size: 26px;
  color: #F0EAD6;
  text-align: left;
  width: 62vw;
  position: relative;
  margin-bottom: 10px;
`;
const Parent = styled.div`
  // border: 5px solid rgb(0,0,0);
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  width: 62vw;
  position: relative;
  align-items: center;
  align-self: center;
`;



export default ReviewWidget;



