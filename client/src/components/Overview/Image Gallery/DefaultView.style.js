import styled from 'styled-components';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';


export const StyledSlider = styled.section`
  width: 83%;
  height: 65vh;
  border-radius: 30px;
  background-color: #F0EAH3;
  margin-left: 40px;
  margin-top: 40px;
`

export const StyledImage = styled.div`
  border-radius: 30px;
  height: 100%;
  width: 100%;
  max-width: 100%;
  max-height: 100%;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
`

export const LeftSplit = styled.div`
  width: 20%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 50px;
`

export const GalleryThumbnail = styled.img`
  flex-grow: 1;
  height: 50px;
  width: 50px;
  margin: 5px;
  border-radius: 5px;

  &: hover {
    height: 60px;
    width: 60px;
    border: 3px solid #F0EAD6;
  }
`

export const CurrentGalleryThumbnail = styled.img`
  flex-grow: 1;
  height: 50px;
  width: 50px;
  margin: 5px;
  border-radius: 5px;
  border: 3px solid #F0EAD6;
`

export const LeftArrowSplit = styled.div`
  flex: 5%;
  height: 100%;
  display: grid;
  place-items: center;
`

export const CenterSplit = styled.div`
  flex: 70%;
  height: 100%;
`

export const RightArrowSplit = styled.div`
  flex: 5%;
  height: 100%;
  display: grid;
  place-items: center;
`

export const StyledRightArrow = styled(FaArrowAltCircleRight)`
  font-size: 3rem;
  color: rgb(255,255,255, 0.7);
  cursor: pointer;
  user-select: none;
  background-color: rgb(0, 0, 0, 0.1);
  border-radius: 40px;

  & :hover {
    color: #F0EAD6;
    font-size: 100rem;
  }
`

export const StyledLeftArrow = styled(FaArrowAltCircleLeft)`
font-size: 3rem;
color: white;
cursor: pointer;
color: rgb(255,255,255, 0.7);
user-select: none;
background-color: rgb(0, 0, 0, 0.1);
border-radius: 40px;

& :hover {
  color: #F0EAD6;
}
`