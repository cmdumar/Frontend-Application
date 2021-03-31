import { SET_ERRORS } from "../actions/types"

const errors = (state = '', action) => {
  if (action.type === SET_ERRORS) {
    return action.payload;
  }
  return state;
}

export default errors;
