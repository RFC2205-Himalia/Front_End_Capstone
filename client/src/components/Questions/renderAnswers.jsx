import React, { useState } from "react";
import Helpful from './helpfulComponent.jsx';
import { useDispatch, useSelector } from "react-redux";
import { answerRender } from "../../Features/questions.js";
import PhotoModal from "./PhotoModal.jsx";


function Answers(props) {
  const dispatch = useDispatch();
  const answersSorted = useSelector(state => state.questions.sortedAnswers);
  const answersInitial = useSelector(state => state.questions.renderAnswers);



  // Converts date from string to appropriate format
  const convertDate = (date) => {
    let convertedDate = (new Date(date)).toLocaleDateString(undefined, { timeZone: 'UTC', year: "numeric", month: "long", day: "numeric" })
    return convertedDate;
  }
  // Shows all answers for specific question
  const answerHandler = (e) => {
    let loadList = Object.assign({}, answersInitial);
    loadList[e.target.id] = (answersSorted[e.target.id]);
    dispatch(answerRender(loadList));
  }
  // Returns answers list for question to default list
  const answerCollapseHandler = (e) => {
    let loadList = Object.assign({}, answersInitial);
    loadList[e.target.id] = (answersSorted[e.target.id]).slice(0, 2);
    dispatch(answerRender(loadList));
  }


  // Aliases to keep code cleaner
  let id = props.question.question_id;
  let initialLength = answersInitial[id].length;
  let totalLength = answersSorted[id].length;


  const [modal, setModal] = useState({});
  const updateModal = (id) => {
    setModal({
      [id]: !modal[id]
    })
  }

  // onClick={(e) => updateQuestionModal(e)}

  return (
    <div >
      {initialLength > 0 ? answersInitial[id].map((answer, index) => {
        return (
          <div style={answerTitle} key={answer.id}> {index === 0 ? <div><b>A: </b><span>{answer.body}</span></div> : <span style={answersStyle}>{answer.body}</span>}
            <div style={photosOuter}>
            {answer.photos.length > 0 ?
              answer.photos.map((photo) => {
                return (
                  <div key={photo}>
                    <img id={photo} src={photo} height="100" style={photos}
                    element='Thumbnail'
                    widget='Questions And Answers'
                    onClick = {(e) => updateModal(e.target.id)} ></img>
                    {modal[photo] ? <PhotoModal closeModal={updateModal} photoURL={photo} /> : null}
                  </div>
                  )
                })
            : null}
            </div>
            <br></br>
            <span style={intitialStyle}>by {answer.answerer_name === 'Seller' ? <b>&nbsp; {answer.answerer_name}</b> : answer.answerer_name}, {convertDate(answer.date)}&nbsp;|&nbsp;
            <Helpful
              data={answer}
              title={id}
              reported={false}
            />
            </span>
          </div>
        )
      }) : <span style={{color:"#7a7a7a"}}>No answers to question</span>}
      <br></br>
      {totalLength > 2 && initialLength < totalLength ?
        <span
          style={answerClickable}
          id={id}
          element='Load More Answers'
          widget='Questions And Answers'
          onClick={(e) => answerHandler(e)}
          >
            LOAD MORE ANSWERS
        </span> : null}
      {initialLength === totalLength && totalLength > 2 ?
        <span
          style={answerClickable}
          id={id}
          element='Collapse Answers'
          widget='Questions And Answers'
          onClick={(e) => answerCollapseHandler(e)}
          >
            COLLAPSE ANSWERS
        </span> : null}
    </div>


  )
}


export default Answers;


//CSS styling
const answerClickable = {
  fontSize: '12px',
  color: '#7a7a7a',
  cursor: 'pointer',
  fontWeight: 'bold',
  paddingLeft: '22px'
}

const intitialStyle = {
  fontSize: '12px',
  color: '#d1cec2c1',
  paddingLeft: '22px',
  display: "flex",
  flexDirection: "row",
  //marginTop: "8px",
  marginBottom: "15px"
};

const photos = {
  marginTop: "15px",
  marginRight: "10px",
  border: "1px solid black",
  boxShadow: "1px 1px 5px black",
};

const photosOuter = {
  paddingLeft: '22px',
  display: "flex",
  flexDirection: "row",
}

const answersStyle = {
  alignItems: 'left',
  width: '46vw',
  paddingLeft: '22px',
  textAlign: "left",
  margin: "1px"

};

const answerTitle = {
  alignItems: 'left',
  width: '45vw',
  margin: "1px",
  color: '#F0EAD6',
  textAlign: "left"
}