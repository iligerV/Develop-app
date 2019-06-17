export const GET_DATAS_REQUEST = 'GET_DATAS_REQUEST';
export const GET_DATAS_SUCCESS = 'GET_DATAS_SUCCESS';
export const GET_DATAS_FAIL = 'GET_DATAS_FAIL';

let news = [];

export function getDatas() {
  return dispatch => {

    dispatch({
      type: GET_DATAS_REQUEST,
      payload: '',
    });

    try {
      fetch('http://localhost:3000/data/newsData.json')
          .then(response => {
            return response.json()
          })
          .then(data => {
            setTimeout(() => {
              news = data;
              return news;
            }, 1000);
          });

      dispatch({
        type: GET_DATAS_SUCCESS,
        payload: news,
      })

    } catch (e) {

      dispatch({
        type: GET_DATAS_FAIL,
        error: true,
        payload: new Error(e),
      })
    }
  }
}


