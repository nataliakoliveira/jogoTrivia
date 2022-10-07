export const TYPE_API = 'TYPE_API';

export const typeApi = (payload) => ({
  type: TYPE_API,
  payload,
});

export const api = async () => {
  const url = 'https://opentdb.com/api_token.php?command=request';
  return async (dispatch) => {
    const data = await fetch(url);
    const response = await data.json();
    dispatch(typeApi(response));
    console.log(response);
  };
};
