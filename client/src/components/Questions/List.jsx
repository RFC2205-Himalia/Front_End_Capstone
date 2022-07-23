import React from "react";
import Helpful from './helpfulComponent.jsx';
import Answers from './renderAnswers.jsx';
import { useSelector } from 'react-redux';

function List() {
  const list = useSelector(state => state.questions.renderList);
  const answersSorted = useSelector(state => state.questions.sortedAnswers);
  const renderAnswers = useSelector(state => state.questions.renderAnswers);

  return (
    <div style={scrollable}>
      {answersSorted ? list.map((question) => {
        let keys = Object.keys(question.answers);
        return (
          <div  style={questionsStyle} key={`${question.question_id}`}>
            <br></br>
            <div
              style={{ 'fontSize': '18px', maxWidth: "45vw", color: '#F0EAD6'}}>
              <b>Q: {question.question_body}</b>
              <span style={userStyle}> ({keys.length}) {keys.length === 1 ? 'Answer' : 'Answers'}</span>

            </div>
            <div style={questionHelp}>
            <Helpful
              className = "listHelpful"
              title={question.question_id}
              data={question}
            />
            </div>
            {Object.keys(renderAnswers).length > 0 ? <Answers question={question} /> : null}
          </div>
        )
      }) : null}
    </div>
  )
}

export default List;

// CSS styling
const scrollable =
{
  marginTop: "10px",
  marginLeft: "16vw",
  position: "relative",
  overflowY: 'auto',
  maxHeight: '50vh',
  display: "flex",
  flexDirection: "column",
  width: "63vw",
  alignItems: "left",
  textAlign: "left",
  left: "1.5vw"
};

const questionsStyle = {
  display: 'flex',
  flexDirection: "column",
  alignItems: 'left',
  width: '60vw',
  alignSelf: "center",
  textAlign: "left"
};

const questionHelp = {
  //position: "relative",
  marginTop: "-16px",
  textAlign: "right",
  width: "60vw",
  marginBottom: "10px",

}

const userStyle = {
  //position: "relative",
  fontSize: '12px',
  color: '#d1cec2c1',
};

