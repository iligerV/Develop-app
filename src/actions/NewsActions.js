export const GET_DATAS_REQUEST = 'GET_DATAS_REQUEST'
export const GET_DATAS_SUCCESS = 'GET_DATAS_SUCCESS'
export const GET_DATAS_FAIL = 'GET_DATAS_FAIL'

export const getDatasSuccess = data => dispatch => {
  return dispatch({
    type: GET_DATAS_SUCCESS,
    payload: data,
  })
}

export const getDatasError = () => dispatch => {
  return dispatch({
    type: GET_DATAS_FAIL,
    error: true,
    payload: new Error('Ошибка авторизации'),
  })
}
