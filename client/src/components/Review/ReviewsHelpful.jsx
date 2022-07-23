import React, { useState } from "react";
import axios from "axios";


function ReviewHelpful(props) {
  // Currently only lets you click yes or report once, but on refresh can click yes again. Will need to use cookie or something to track user later.


  // Sends request to report question or answer
  const putRequests = (qOrAID) => {
    let url = `${qOrAID}`;
    axios.put(`/${url}`)
      .then(() => {
        console.log('PUT')
      })
      .catch((error) => {
        console.log("error", error)
      })
  };



  // Incrememnt ReviewHelpful count
  const helpfulHandler = (type, e) => {
    // putRequests(`${type}s/${e.target.id}/helpful`)
    putRequests(`reviews/${e.target.id}/helpful`)
  }

  // Have it change the report value from false to true in the question state. Do not just toggle since it can only be reported once. Then add question/asnwer to array of reported questions/answers to be looked over later.
  const reportHandler = (type, e) => {
    putRequests(`${type}/${e.target.id}/report`)
  }

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

  const [modal, setModal] = useState({});
  const updateModal = (id) => {
    setModal({
      [id]: !modal[id]
    })
  }


  // Aliases to clean up the render component
  let id = props.data.review_id
  let helpfulness = props.data.helpfulness || props.data.question_helpfulness;
  let wasClicked = clicked[id] === true;
  let isReported = reported[id] === true;
  let helpCount = helpfulness || 0;
  let helped = helpfulness + 1 || 1;

  // Set type to use as route guidance on handler
  let type = 'reviews';

  return (
    <div style={helpfulContainer}>
      <span style={userStyle}>
        Helpful?
      </span>&nbsp;&nbsp;
      <span
        style={underlineStyle}
        title="Yes"
        id={id}
        element='Increase Helpful Count'
        widget='Reviews'
        onClick={!wasClicked ? (e) => { helpfulHandler(type, e); updateClick(e) } : null}>
        Yes
      </span>&nbsp;
      <span
        style={userStyle}>
        ({wasClicked ? helped : helpCount})
      </span>&nbsp;
      {type === 'reviews' ?
      <span
        style={userStyle}> | </span>: null}
      {type === 'reviews' ?
      <span
        style={underlineStyle}
        id={id}
        element='Report answer'
        widget='Reviews'
        onClick={!isReported ? (e) => { reportHandler(type, e); updateReport(e) } : null}>
        {isReported ? 'Reported' : 'Report'}
      </span> : null}
    </div>

  )
}

export default ReviewHelpful;




// Styling for component

const underlineStyle = {
  //position: "relative",
  fontSize: '12px',
  color: '#6966669b',
  textDecoration: 'underline',
  cursor: 'pointer',
};
const userStyle = {
  //position: "relative",
  fontSize: '12px',
  color: '#6966669b',
};

const helpfulContainer = {
  // position: "relative",
  // top: "-2vh",
}