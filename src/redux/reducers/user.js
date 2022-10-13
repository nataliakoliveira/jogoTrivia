import { TYPE_SCORE, TYPE_LOGIN, TYPE_API_THUNK, ASSERTIONS } from '../action';

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
  case ASSERTIONS:
    return {
      ...state,
      assertions: action.assertions + state.assertions,
    };
  case TYPE_API_THUNK:
    return {
      ...state,
      payload: action.payload,
    };
  default:
    return state;
  }
};

export default player;
