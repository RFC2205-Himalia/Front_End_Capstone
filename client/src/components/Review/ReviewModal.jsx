import React, { useState, useEffect } from "react";
import axios from "axios";

import { useSelector, useDispatch } from "react-redux";
import { refresh } from "../../Features/questions.js";


function ReviewModal({ closeModal, productID }) {

  const dispatch = useDispatch();
  const product = useSelector(state => state.addProduct.products);

  const formDefault = { question: "", name: "", email: "" };
  const [questionValues, setQuestionValues] = useState(formDefault);
  const [questionErrors, setQuestionErrors] = useState({});
  const [questionSubmit, setQuestionSubmit] = useState(false);

  let id = productID;

  // When canSubmit state update to "true" it handles submitting
  // Can only run if no errors
  useEffect(() => {
    if (Object.keys(questionErrors).length == 0 && questionSubmit) {
      let body = {
        "body": `${questionValues.question}`,
        "name": `${questionValues.name}`,
        "email": `${questionValues.email}`,
        "product_id": Number(id)
      }
      postRequests(body)
      closeModal(id);
    }
  }, [questionSubmit])

  // Creates new message or answer
  const postRequests = (body) => {
    axios.post(`http://localhost:3000/qa/questions`, body)
      .then(() => {
        console.log(body);
        dispatch(refresh());
      })
      .catch((error) => {
        console.log("error", error.message)
      })
  }
  // When submitted, checks if errors
  const questionSubmitHandler = (e) => {
    e.preventDefault();
    setQuestionErrors(validate(questionValues));
  }
  // Tracks changes being typed
  const handlechange = (e) => {
    const { name, value } = e.target;
    setQuestionValues({ ...questionValues, [name]: value })
  }
  // Checks if errors
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.question) {
      errors.question = "Question is required!"
    }
    if (!values.name) {
      errors.name = "Nickname is required!"
    }
    if (!values.email) {
      errors.email = "Email is required!"
    } else if (!regex.test(values.email)) {
      errors.email = "Not a valid Email format!"
    }
    if (Object.keys(errors).length === 0) {
      setQuestionSubmit(true);
    }
    return errors;
  }


  return (
    <div style={modalBackground} className="modalBackground">
      <div style={modalContainer} className="modalContainer">
        <form onSubmit={questionSubmitHandler}>
          <h2 style={headers}>Add A Review</h2>
          <h3 style={headers}>For the {product.name}</h3>

          <div style={formDiv} className="answer">
            <label>Your Question* </label>
            <input
              style={textBox}
              type="text"
              maxLength="1000"
              placeholder="Example: Is it shipped from USA?"
              name="question"
              value={questionValues.question}
              onChange={(e) => { handlechange(e) }}
            />
            <p style={error}>{questionErrors.question}</p>
          </div>

          <div style={formDiv} className="nickname">
            <label>Nickname* </label>
            <input
              style={textBox}
              type="text"
              maxLength="60"
              placeholder="Example: jack543!"
              name="name"
              value={questionValues.name}
              onChange={(e) => { handlechange(e) }}
            />
            {questionErrors.name ? <p style={error}>{questionErrors.name}</p> :
              <p
                style={userStyle}
                className="nickNameNotice">
                For privacy reasons, do not use your full name or email address
              </p>
            }
          </div>

          <div style={formDiv} className="email">
            <label>Email* </label>
            <input
              style={textBox}
              type="text"
              maxLength="60"
              placeholder="Example: email123@gmail.com"
              name="email"
              value={questionValues.email}
              onChange={(e) => { handlechange(e) }}
            />
            {questionErrors.email ? <p style={error}>{questionErrors.email}</p> :
              <p
                style={userStyle}
                className="emailNotice">
                For authentication reasons, you will not be emailed
              </p>
            }
          </div>

          <div style={footer} className="modalFooter">
            <button
              style={button}
              element='Cancel Question Modal'
              widget='Questions And Answers'
              onClick={() => closeModal()}> Cancel </button>
            <button
              style={button}
              type="submit"
              element='Submit Question Modal'
              widget='Questions And Answers'
              onSubmit={(e) => questionSubmitHandler(e)}> Submit </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ReviewModal;




const error = {
  color: "red",
  fontSize: '12px'
}

const headers = {
  maxWidth: "500px",
  right: "0",
  postition: "absolute",
  textAlign: "center",
}

const modalBackground = {
  width: "100vw",
  position: "fixed",
  height: "100vh",
  left: "0",
  top: "0",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "rgba(159,159,159,0.5)",
  overflow: "hidden",
}

const modalContainer = {
  border: "2px solid black",
  width: "auto",
  height: "auto",
  borderRadius: "12px",
  backgroundColor: "white",
  boxShadow: "grey",
  display: "flex",
  flexDirection: "column",
  padding: "25px",
  position: "absolute",
  justifyContent: "center",
  alignItems: "center",
}

const formDiv = {
  display: "inlineBlock",
  maxWidth: "500px",
  textAlign: "right",
  marginRight: "50px"
}

const textBox = {
  width: "20vw",
  height: "25px",
  right: "0",
  postition: "absolute",
}

const userStyle = {
  fontSize: '12px',
  color: '#5c5c5c',
  marginRight: "10px",
};

const footer = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}

const button = {
  maxWidth: "100px",
  height: "25px",
  margin: "10px",
  border: "none",
  borderRadius: "8px",
  fontSize: "16px",
  cursor: "pointer",
  boxShadow: "2px 2px 5px gray"
}
