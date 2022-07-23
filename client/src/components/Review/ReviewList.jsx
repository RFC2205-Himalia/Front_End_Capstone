import sampleData from "./ReviewSampleData.js"
import React from "react";
import { useEffect } from "react";
import styled from "styled-components";

import ReviewListElement from "./ReviewListElement.jsx";
import ReviewButtons from "./ReviewButtons.jsx";


function ReviewList ({reviews, sortReviews}) {
    // console.log("Reviews: ", sampleData.results)

    return (
        <ReviewListWrapper>
            {/*pass whatever compoonent this div becomes sortReviews*/}
            <SortReviews>{reviews.length} reviews, sorted by <DropDown>relevance</DropDown></SortReviews>
            {
                reviews.map((element) => {
                    return <ReviewListElement key={element.review_id} review = {element}/>
                })
            }
            <ReviewButtons/>
        </ReviewListWrapper>
    )
}

const ReviewListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: left;
    color: #F0EAD6;
    width: 31vw;

`;

const SortReviews = styled.div`
    font-size: 26px;
    font-weight; 100;

`;

const DropDown = styled.span`
    text-decoration: underline;

`;


export default ReviewList;