import React from "react";
import axios from "axios";

import List from "./List.jsx";
import Sort from "./Sort.jsx";
import Search from "./Search.jsx";
import Buttons from "./Buttons.jsx";


import { useDispatch, useSelector } from "react-redux";
import { questionList, sorted, addRender, answerRender, answersUnchange } from "../../Features/questions.js";
import { useEffect } from "react";

function Questions ({productID}) {
  productID = 66670
  // Hardcoded value for now, replace later with dynamic from URL
  var productNumber = Number(productID);
  // Variables to pass on current product id
  var productReq = `questions?product_id=${productNumber}`

  // State components used later in file
  const dispatch = useDispatch();
  const questions = useSelector(state => state.questions.questions);
  const sortedAnswers = useSelector(state => state.questions.sortedAnswers);
  const renderList = useSelector(state => state.questions.renderList);
  const refresh = useSelector(state => state.questions.rerender)

  // componentDidMount replacement
  useEffect(() => {
    getRequests(productReq)
  }, []);

  useEffect(() => {
    getRequests(productReq)
  }, [refresh]);

  // Updates both sorted answers and question renderlist when questions are populated
  useEffect(() => {
    let size = questions.length;
    if (size > 0) {
      dispatch(addRender((questions).slice(0, 4)));
    }
  }, [questions])
  // Needed to separate out addRender to trigger reset to default
  useEffect(() => {
    let size = renderList.length;
    if (size > 0) {
      dispatch(sorted(Sort(questions)))
      dispatch(answersUnchange(Sort(questions)))
    }
  }, [renderList])
  // Update shorter answer lits to be rendered after they have been sorted
  useEffect(() => {
    let size = Object.keys(sortedAnswers).length;
    if (size > 0) {
      renderAnswers(sortedAnswers)
    }
  }, [sortedAnswers])
// Sends out request for Q&A data for specified product ID
  const getRequests = (url) => {
    axios.get(`/qa/${url}&count=100`)
    .then((success) => {
      dispatch(questionList(success.data.results));
    })
    .catch((error) => {
      console.log("error", error)
    })
  }

  // Intial load of 2 answers
  const renderAnswers = (list) => {
    let questionIDs = Object.keys(list);
    let loadList = {};
    questionIDs.forEach((question) => {
      loadList[question] = (list[question]).slice(0, 2);
    })
    dispatch(answerRender(loadList));
  }




  return (
    <div className="questionsWrapper" style={wrapper} >
      <div style={titleContainer}>
      <span style={h2}>{`QUESTIONS & ANSWERS`}</span>
      <span style={numberAsked}>({questions.length}) Questions Asked About This Product </span>
      </div>
      <Search />
      {/* <span style={numberAsked}>({questions.length}) Questions Asked About This Product </span> */}
      <List />
      <Buttons product={productNumber}/>
    </div>
  )
}

export default Questions;



const h2 = {
  position: 'relative',
  textAlign: 'left',
  width: "30vw",
  fontWeight: "100",
  fontSize: "26px",
  overflowX: "hidden",
  marginBottom: "10px",
  color: '#F0EAD6'
};
const numberAsked = {
  position: 'relative',
  textAlign: 'right',
  width: "32vw",
  fontWeight: "100",
  overflowX: "hidden",
  marginBottom: "10px",
  marginTop: "5px",
  fontSize: "14px",
  color: '#F0EAD6'
};

const wrapper = {
  maxWidth: "100vw",
}

const titleContainer = {
  display: "flex",
  flexDirection: "row",
  marginLeft: "auto",
  marginRight: "auto",
  width: "62vw",
  position: 'relative',
  alignItems: "center",
  alignSelf: "center"
}