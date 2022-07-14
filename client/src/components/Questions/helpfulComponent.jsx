import React, {useState} from "react";

function Helpful (props) {
  // Currently only lets you click yes or report once, but on refresh can click yes again. Will need to use cookie or something to track user later.

  // Tracks if question or answer have been reported
  const [reported, setReported] = useState({});
  const updateReport = (e) => {
    setReported({
      ...reported,
      [e.target.id]: true
    })
  }

  // Tracks if question or answer have already been incremeneted as helpful
  const [clicked, setClicked] = useState({});
  const updateClick = (e) => {
    setClicked({
      ...clicked,
      [e.target.id]: true
    })
  }

  // Aliases to clean up the render component
  let id = props.data.id || props.data.question_id;
  let helpfulness = props.data.helpfulness || props.data.question_helpfulness;
  let wasClicked = clicked[id] === true;
  let isReported = reported[id] === true;
  let helpCount = helpfulness || 0;
  let helped = helpfulness + 1;

  // Set type to use as route guidance on handler
  let type = 'answer';
  if (props.data.question_id) {
    type = "question";
  }

  return (
    <div>
      <span style={userStyle}>Helpful?</span>&nbsp;
      <span style={userStyle}>|</span>&nbsp;
      <span style={underlineStyle} title="Yes" id={id} onClick = {!wasClicked ? (e) => {props.helpfulHandler(type, e); updateClick(e)} : null }>Yes</span>&nbsp;
      <span style={userStyle}>{wasClicked ? helped : helpCount})</span>&nbsp;
      <span style={userStyle}>|</span>&nbsp;
      {type === 'question' ? <span style={underlineStyle}>Add Answer</span> : null}&nbsp;
      <span style={userStyle}>|</span>&nbsp;
      <span style={underlineStyle} id={id} onClick = {!isReported ? (e) => {props.reportHandler(type, e); updateReport(e)} : null }>{isReported ? 'Reported' : 'Report'}</span>
    </div>

  )
}

export default Helpful;




// Styling for component
const underlineStyle = {
  'fontSize': '14px',
  'color': '#5c5c5c',
  'textDecoration': 'underline'
};
const userStyle = {
  'fontSize': '14px',
  'color': '#5c5c5c',
};