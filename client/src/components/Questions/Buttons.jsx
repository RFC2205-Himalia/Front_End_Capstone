import React, {useState} from "react";
import QuestionsModal from "./QuestionsModal.jsx";
import { useDispatch, useSelector } from "react-redux";
import { addRender, incrementCount, resetCount } from "../../Features/questions.js";

function Buttons(props) {

  const dispatch = useDispatch();
  const counter = useSelector(state => state.questions.count);
  const questions = useSelector(state => state.questions.questions);
  const rendered = useSelector(state => state.questions.renderList);
  const searching = useSelector(state => state.questions.searching);


  // Render 2 more questions
  const moreHandler = () => {
    async function increment() {
      await dispatch(incrementCount())
    }
    increment().then(dispatch(addRender(questions.slice(0, counter + 2))));
  }
  // Collaspe question list down to default amount
  const collapseHandler = () => {
    dispatch(resetCount());
    dispatch(addRender(questions.slice(0, 4)))
  }
  // Track boolean to show "Question" Modal
  const [questionModal, setQuestionModal] = useState(false);
  const updateQuestionModal = () => {
    setQuestionModal(current => !current)
  }

  return (
    <div style={buttons}>
      {rendered.length > 0 && rendered.length < questions.length && searching === false ?

        <button
          title="More"
          onClick={moreHandler}
          type='button'
          style={indvButton}
          element="More Answers Button"
          widget='Questions And Answers'
          >
            MORE ANSWERED QUESTIONS
        </button> : null}
      {rendered.length > 4 && rendered.length <= questions.length ?
        <button
          title="More"
          onClick={collapseHandler}
          type='button'
          style={indvButton}
          element="Collapse Answers Button"
          widget='Questions And Answers'
          >
            COLLAPSE QUESTIONS
        </button> : null}

      <button
        title="Add"
        onClick={updateQuestionModal}
        type='button'
        style={indvButton}
        element="Add Question Button"
        widget='Questions And Answers'
        >
          ADD A QUESTION +
        </button>

      {questionModal ?
        <QuestionsModal
          productID={props.product}
          closeModal={updateQuestionModal}
        /> : null}

    </div>
  )
}

export default Buttons;

const buttons = {
  display: "flex",
  textAlign: "left",
  left: "18.5vw",
  width: "60vw",
  height: "75px",
  flexDirection: "row",
  marginLeft: "19vw",
  marginTop: "10px",
  marginBottom: "40px"
}

const indvButton = {
  fontWeight: "bold",
  maxWidth: "250px",
  margin: "10px",
  maxHeight: "75px",
  backgroundColor: "#F0EAD6",
  //border: "1px solid black",
  padding: "10px",
  boxShadow: "1px 1px 5px black"
}
