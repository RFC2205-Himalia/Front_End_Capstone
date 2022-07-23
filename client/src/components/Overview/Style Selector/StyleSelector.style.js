import styled from 'styled-components';



export const StyledStyleGrid = styled.div`
display: grid;
grid-template-columns: repeat(4, 55px);
grid-auto-rows: 55px;
padding-bottom: 20px;
`

export const CurrentStyleText = styled.div`
font-size: 40px;
`

export const StyledThumbnail = styled.img`
height: 50px;
width: 50px;
border-radius: 50%;
object-fit: cover;
margin: 10px;

&:hover {
  border: 3px solid;
  border-color: #F0EAD6;
}
`

export const CurrentStyledThumbnail = styled.img`
height: 50px;
width: 50px;
object-fit: cover;
border-radius: 50%;
border: 3px solid;
border-color: #F0EAD6;
margin: 10px;
`


