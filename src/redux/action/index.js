export const TYPE_LOGIN = 'TYPE_LOGIN';
export const TYPE_SCORE = 'TYPE_SCORE';

export const typeLogin = (userData) => ({
  type: TYPE_LOGIN,
  payload: userData,
});

export const typeScore = (score) => ({
  type: TYPE_SCORE,
  score,
});

export const api = async () => {
  const url = 'https://opentdb.com/api_token.php?command=request';
  return async (dispatch) => {
    const data = await fetch(url);
    const response = await data.json();
    dispatch(typeApi(response));
  };
};
