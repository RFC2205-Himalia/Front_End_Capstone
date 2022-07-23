import React from 'react';
import { useSelector } from "react-redux";
import styled from 'styled-components';

import Stars from '../Questions/Stars.jsx';


function AverageReviewScore ({AverageScore}) {
    
    return (
        <AvgReviewScore>
            <Title>{AverageScore} </Title>
           <Stars numStars={AverageScore}/>
        </AvgReviewScore>
    )
}

const AvgReviewScore = styled.div`
    display: flex;
    alignt-self: left;
    position: relative;
`;

const Title = styled.h2`
  font-weight: 100;
  font-size: 90px;
  color: #F0EAD6;
  margin-bottom: 10px;
  margin-right: 15px;
`;

export default AverageReviewScore;