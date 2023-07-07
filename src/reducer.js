import { combineReducers } from "redux"

import pathReducer from "./features/finalPath/pathSlice"

const rootReducer = combineReducers({
  path: pathReducer
})

export default rootReducer;