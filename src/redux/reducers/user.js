import { TYPE_SCORE, TYPE_LOGIN, TYPE_API_THUNK } from '../action';

const INITIAL_STATE = {
  email: '',
  name: '',
  score: 0,
};

const user = (state = INITIAL_STATE, action) => {
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
  default:
    return state;
  }
};

export default user;
