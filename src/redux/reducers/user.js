import { TYPE_API } from '../action';

const INITIAL_STATE = {
  email: '',
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case TYPE_API:
    return {
      ...state,
      email: action.payload,
    };
  default:
    return state;
  }
};

export default user;
