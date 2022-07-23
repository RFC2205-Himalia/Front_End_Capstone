import React from "react";
import styled from "styled-components";



function ReviewBreakdown ({filterReviews,ones,twos,threes,fours,fives}) {

    

    return(
        <BreakdownWrapper>
            <BreakdownLine onClick={() => {filterReviews(1)}}>
                <BarIndicator>
                1 Star
                    <CharacteristicsScale/>
                </BarIndicator>
            </BreakdownLine>
            <BreakdownLine onClick={() => {filterReviews(2)}}>
                <BarIndicator>
                2 Star
                    <CharacteristicsScale/>
                </BarIndicator>
            </BreakdownLine>
            <BreakdownLine onClick={() => {filterReviews(3)}}>
                <BarIndicator>
                3 Star
                    <CharacteristicsScale/>
                </BarIndicator>
            </BreakdownLine>
            <BreakdownLine onClick={() => {filterReviews(4)}}>
                <BarIndicator>
                4 Star
                    <CharacteristicsScale/>
                </BarIndicator>
            </BreakdownLine>
            <BreakdownLine onClick={() => {filterReviews(5)}}>
                <BarIndicator>
                5 Star
                    <CharacteristicsScale/>
                </BarIndicator>
            </BreakdownLine>
        </BreakdownWrapper>
    );
}

const BreakdownWrapper = styled.div`
    display: flex;
    flex-direction: column;
    color: #F0EAD6;
    text-decoration: underline;
    font-size: 20px;
    font-weight: 60;
`;

const BarIndicator = styled.div`
    height: 10px;
    display: flex;
    align-items: center;
    margin: 10px 0;
    width: 100%;
`;

const CharacteristicsScale = styled.div`
    width: 50%;
    height: 100%;
    background: darkgray;
    border-radius: 5px;
    margin-left: 20px;
`;


const BreakdownLine = styled.div`
    diplay: flex;
    flex-direction: column;
`;


export default ReviewBreakdown;