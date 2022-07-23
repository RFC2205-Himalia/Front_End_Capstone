import React from "react";
import styled from "styled-components";

function Characteristics({ characteristics }) {
    const CharScaleMeanings = {
        Size: ["Too small", "Perfect", "Too large"],
        Width:["Too Narrow", "Perfect", "Too Wide"],
        Comfort: ["Poor", "Ok", "Perfect"],
        Quality:["Poor", "What I Expected", "Perfect"],
        Length:["Runs Short", "Perfect", "Runs Long"],
        Fit:["Runs Tight", "Perfect", "Runs Long"]
      };


  return (
    <CharacteristicsWrapper>
      {Object.keys(characteristics).map((characteristic, i) => {
        let lowerEnd = 'low';
        let middle = 'middle'
        let highEnd = 'high';
        // let marginLeft = characteristics[i].value * 100 || 1;

        // console.log(characteristic);

        switch(characteristic){
            case "Size":
                lowerEnd = CharScaleMeanings.Size[0];
                middle = CharScaleMeanings.Size[1];
                highEnd = CharScaleMeanings.Size[2];
                break;
            case "Width":
                lowerEnd = CharScaleMeanings.Width[0];
                middle = CharScaleMeanings.Width[1];
                highEnd = CharScaleMeanings.Width[2];
                break;
            case "Comfort":
                lowerEnd = CharScaleMeanings.Comfort[0];
                middle = CharScaleMeanings.Comfort[1];
                highEnd = CharScaleMeanings.Comfort[2];
                break;
            case "Quality":
                lowerEnd = CharScaleMeanings.Quality[0];
                middle = CharScaleMeanings.Quality[1];
                highEnd = CharScaleMeanings.Quality[2];
                break;
            case "Length":
                lowerEnd = CharScaleMeanings.Length[0];
                middle = CharScaleMeanings.Length[1];
                highEnd = CharScaleMeanings.Length[2];
                break;
            case "Fit":
                lowerEnd = CharScaleMeanings.Fit[0];
                middle = CharScaleMeanings.Fit[1];
                highEnd = CharScaleMeanings.Fit[2];
                break;
        }

        return (
          <form style={{color:"#F0EAD6"}} key={characteristics[characteristic].id}>
            <CharacteristicsText>{characteristic}</CharacteristicsText>
            <Indicator>
              <Arrow style={{marginLeft: 20}}/>
              <CharacteristicsScale/>
              <CharacteristicsScale/>
              <CharacteristicsScale/>
            </Indicator>
            <ScaleText>
                <LowEnd>{lowerEnd}</LowEnd>
                <MidText>{middle}</MidText>
                <HighEnd>{highEnd}</HighEnd>
            </ScaleText>

          </form>
        );
      })}
    </CharacteristicsWrapper>
  );
}

const Indicator = styled.div`
    height: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px 0;
    width: 100%;
`;

const CharacteristicsScale = styled.span`
    width: 100%;
    height: 100%;
    background: darkgray;
    border-radius: 5px;
`;

const Arrow = styled.div`
    position: absolute;
    border-style: solid;
    border-width: 10px 10px 0 10px;
    border-color: #F0EAD6 transparent transparent transparent;    position: absolute;
    border-style: solid;
    border-width: 10px 10px 0 10px;
    border-color: #F0EAD6 transparent transparent transparent;
`;

const CharacteristicsWrapper = styled.div`
    padding: 0;
    width: 250px;
    margin-top: 30px;
`;

const CharacteristicsText = styled.span`
    font-weight: 500;
    font-size: 17px;
    display: flex;
`;

const ScaleText = styled.div`
    font-weight: 500;
    font-size: 17px;
    display: flex;
    justify-content: space-evenly;
`;

const HighEnd = styled.div`

`;
// margin-left: 70%;    

const LowEnd = styled.div`

`;

const MidText = styled.div`

`;



export default Characteristics;


