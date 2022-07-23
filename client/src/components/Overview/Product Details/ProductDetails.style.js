import styled from 'styled-components';
import {FaFacebook, FaTwitterSquare, FaPinterest} from 'react-icons/fa';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const StyledPrice = styled.div`
  font-size: 15px;
  color: #F0EAD6
`

export const StyledGenre = styled.p`
  font-size: 20px;
  margin-bottom: -8px;
  padding: 3px;

`

export const StyledDesc = styled.p`
  font-style: italic;
  margin-top: 30px;
  justify-content: flex-end;
  color: #F0EAD6;
`

export const StyledIcons = styled.div`
  margin-top: 10px;
`


export const FacebookIcon = styled(FaFacebook)`
  font-size: 20px;
  color: #4267B2;
  cursor: pointer;
  user-select: none;
  background-color: rgb(0, 0, 0, 0.1);
  border-radius: 30px;
`

export const TwitterIcon = styled(FaTwitterSquare)`
  font-size: 20px;
  color: #1DA1F2;
  cursor: pointer;
  user-select: none;

  border-radius: 30px;
`

export const PinterestIcon = styled(FaPinterest)`
  font-size: 20px;
  color: #E60023;
  cursor: pointer;
  user-select: none;
  border-radius: 30px;
`