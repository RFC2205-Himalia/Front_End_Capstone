import styled from 'styled-components';

export const AppGrid = styled.div`
display: grid;
grid-template-columns: 2fr 1fr;
grid-template-rows: auto;
margin-bottom: 50px;
grid-template-areas: "header header";
`

export const RightSide = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
margin-right: 30px;
`

export const LeftSide = styled.div`
display: flex;
`
