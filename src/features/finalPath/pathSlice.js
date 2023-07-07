import { createSelector } from 'reselect';
import { questions_data } from '../data/questions';

const initialState = []

export default function pathReducer(state = initialState, action) {
  switch (action.type) {
    case  'path/updatePath': {
      return state.concat(action.payload)
    }
    case 'path/resetPath': {
      return []
    }
    default:
      return state
  }
}

export const updatePath = (questionId, optionId) => ({
  type: 'path/updatePath',
  payload: { questionId: questionId, optionId: optionId }
})

export const resetPath = () => ({
  type: 'path/resetPath'
})

export const selectPath = state => state.path;

export const selectFullPath = createSelector(
  selectPath,
  (path) => path.map(pathData => {
    const question = questions_data[pathData.questionId];
    const option = question.options.find(option => option.id === pathData.optionId);

    return { question: question, option: option};
  })
)