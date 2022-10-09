import { TYPE_SCORE, TYPE_LOGIN } from '../action';

const INITIAL_STATE = {
  email: '',
  name: '',
  score: 0,
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  /*   case TYPE_API:
    return {
      ...state,
      email: action.payload,
    }; */
  case TYPE_LOGIN:
    return {
      ...state,
      email: action.payload.email,
      name: action.payload.name,
    };
  case TYPE_SCORE:
    return {
      ...state,
      score: action.score,
    };
  default:
    return state;
  }
};

export default user;
