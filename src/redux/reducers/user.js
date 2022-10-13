import { TYPE_SCORE, TYPE_LOGIN, TYPE_API_THUNK, TYPE_ASSERTIONS } from '../action';

const INITIAL_STATE = {
  email: '',
  name: '',
  score: 0,
  assertions: 0,
};

const player = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case TYPE_LOGIN:
    return {
      ...state,
      email: action.payload.email,
      name: action.payload.name,
    };
  case TYPE_SCORE:
    return {
      ...state,
      score: action.score + state.score,
    };
  case TYPE_API_THUNK:
    return {
      ...state,
      payload: action.payload,
    };
  case TYPE_ASSERTIONS:
    return {
      ...state,
      assertions: action.assertions + 1,
    };
  default:
    return state;
  }
};

export default player;
