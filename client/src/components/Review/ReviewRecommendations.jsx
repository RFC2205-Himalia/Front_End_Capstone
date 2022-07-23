import React from 'react';
import { useSelector } from "react-redux";
import styled from 'styled-components';
import { useEffect, useState } from "react";



function ReviewRecommendations ({data}) {
    data = data || {"false": "1", "true": "22" }
    let [percentageRec, setPercentageRec] = useState(0);

    let calcPercentage = (metaData) => {
        let falseNum = parseInt(metaData.false);
        let trueNum = parseInt(metaData.true);
        // console.log(typeof trueNum);

        let percentRec = Math.floor((trueNum/(trueNum + falseNum))*100)
        setPercentageRec(percentRec)
    }

    useEffect(() => {
        calcPercentage(data);
      }, [data]); 



    return (
        <RecommendedWrapper>
            <Recommended>{percentageRec}%</Recommended>
            <Text>of people <br/> recommend this item!</Text>
        </RecommendedWrapper>
    )
}

const RecommendedWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: left;
    color: #F0EAD6;
    margin-top: 20px;
    
`;

const Recommended = styled.div`
    font-size: 70px;
    font-weight: 100;
`;

const Text = styled.div`
    padding-top: 15px;
    font-weight: ;
    font-size: 20px;
    margin-left: 15px;
`;

export default ReviewRecommendations;