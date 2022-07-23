import { createSlice } from "@reduxjs/toolkit";

export const questionData = createSlice({
  name: "questions",
  initialState: {
    count: 4,
    questions: [],
    unchangingAnswers: [],
    sortedAnswers: [],
    searching: false,
    renderList: [],
    renderAnswers: [],
    rerender: false,

    tracking: [],
  },
  reducers: {
    tracker: (state, action) => {
      state.tracking = (state.tracking).concat([action.payload])
    },
    refresh: (state) => {
      state.rerender = !state.rerender
    },
    questionList: (state, action) => {
      state.questions = action.payload;
    },
    sorted: (state, action) => {
      state.sortedAnswers = action.payload;
    },
    answersUnchange: (state, action) => {
      state.unchangingAnswers = action.payload;
    },
    addRender: (state, action) => {
      state.renderList = action.payload;
    },
    questionsUnchange: (state, action) => {
      state.unchangingQuestion = action.payload;
    },
    answerRender: (state, action) => {
      state.renderAnswers = action.payload;
    },
    incrementCount: (state) => {
      state.count = state.count + 2;
    },
    resetCount: (state) => {
      state.count = 4;
    },
    searchingRender: (state, action) => {
      state.searching = action.payload;
    },
  }
})

export const {questionList, sorted, addRender, incrementCount, resetCount, renderAnswers, answerRender, reportedTracker, answersUnchange, questionsUnchange, searchingRender, refresh, tracker} = questionData.actions

export default questionData.reducer;