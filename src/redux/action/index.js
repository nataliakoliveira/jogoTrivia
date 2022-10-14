export const TYPE_LOGIN = 'TYPE_LOGIN';
export const TYPE_SCORE = 'TYPE_SCORE';
export const TYPE_API_THUNK = 'TYPE_API_THUNK';
export const TYPE_ASSERTIONS = 'TYPE_ASSERTIONS';

export const typeAssertions = (assertions) => ({
  type: TYPE_ASSERTIONS,
  assertions,
});

export const typeLogin = (userData) => ({
  type: TYPE_LOGIN,
  payload: userData,
});

export const typeScore = (score) => ({
  type: TYPE_SCORE,
  score,
});

export const typeApiThunk = (payload) => ({
  type: TYPE_API_THUNK,
  payload,
});

export const apiThunkGame = () => {
  const tokenLocalStorage = localStorage.getItem('token');
  const url = `https://opentdb.com/api.php?amount=5&token=${tokenLocalStorage}`;
  return async (dispatch) => {
    const data = await fetch(url);
    const response = await data.json();
    dispatch(typeApiThunk(response));
  };
};
