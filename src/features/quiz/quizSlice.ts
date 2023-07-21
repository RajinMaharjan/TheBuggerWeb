import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quizState: [
    {
      name: "No data found",
      options: [
        { questionId: "000", name: "None", id: "000", isSelected: false },
      ],
      id: "none",
    },
  ],
  answerState: [
    {
      questionId: "fc015030-7bb8-4a22-babf-410a2cc8f4f7",
      optionId: "160f5a6b-fa83-44cd-85f4-517c2605b348",
    },
  ],
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setQuiz: (state, { payload }) => {
      state.quizState = payload;
      for (const obj of state.quizState) {
        if (Array.isArray(obj.options)) {
          for (const option of obj.options) {
            //@ts-ignore
            option.isSelected = false; // Add the "isSelected" property and set it to false
          }
        }
      }
      state.answerState = [];
      console.log(state.quizState);
    },

    changeOption: (state, { payload }) => {
      const activeIndex = payload.activeIndex;
      const optionIndex = payload.optionIndex;
      const changedIndex = state.quizState[activeIndex];
      const updated = changedIndex.options.map((option, index) => {
        index === optionIndex
          ? (option.isSelected = true)
          : (option.isSelected = false);
        return option;
      });
      state.quizState[activeIndex].options = updated;
    },
    collectAnswers: (state) => {
      for (const obj of state.quizState) {
        for (const option of obj.options) {
          if (option.isSelected === true) {
            state.answerState.push({
              optionId: option.id,
              questionId: option.questionId,
            });
          }
        }
      }
      console.log(state.answerState);
    },
  },
});
export const { setQuiz, changeOption, collectAnswers } = quizSlice.actions;
export default quizSlice.reducer;
