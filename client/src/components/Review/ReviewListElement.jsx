import React from "react";
import styled from "styled-components";

import Stars from '../Questions/Stars.jsx';
import ReviewHelpful from "./ReviewsHelpful.jsx";


function ReviewListElement ({review}) {
    const dateOfReview = new Date(review.date)
    const formattedDate = dateOfReview.toDateString()

    return (
        <IndividualReviewElement>
            <StarsAndDate>
                <Stars numStars={review.rating}/>
                <ReviewDate>{review.reviewer_name}, {formattedDate}</ReviewDate>
            </StarsAndDate>
            <Title>{review.summary}</Title>
            <BodyText>{review.body}</BodyText>
            <ReviewHelpful data={review}/>
        </IndividualReviewElement>

    )
}



const Title = styled.p`
  font-size: 26px;
  text-align: flex-start;
  margin-top: 0px;
  font-weight: bold;
`;

const StarsAndDate = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 0px;
`;

const SecondaryText = styled.p`
    font-size: .75em;
    justify-content: flex-start;
`;

const ReviewDate = styled.p`
    font-size: 17px;
    justify-content: flex-end;
    padding-top: 10px
`;

const IndividualReviewElement = styled.div`
//   border: 5px solid rgb(0,0,0);
  width: 31vw;
  height: 10vh;

`;

const BodyText = styled.p`
    font-size: 15px;
`;


export default ReviewListElement;