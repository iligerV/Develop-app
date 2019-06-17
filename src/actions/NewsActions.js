export const GET_DATAS_REQUEST = 'GET_DATAS_REQUEST'
export const GET_DATAS_SUCCESS = 'GET_DATAS_SUCCESS'
export const GET_DATAS_FAIL = 'GET_DATAS_FAIL'

let datasArr = []
let cached = false

;(function getNewsFromJSON() {
  fetch('http://localhost:3000/data/newsData.json')
    .then(response => {
      return response.json()
    })
    .then(data => {
      cached = true
      setTimeout(() => {
        return (datasArr = data)
      }, 1000)
    })
})()

export function getDatas() {
  return dispatch => {
    dispatch({
      type: GET_DATAS_REQUEST,
    })

    if (cached) {
      dispatch({
        type: GET_DATAS_SUCCESS,
        payload: datasArr,
      })
    } else {
      dispatch({
        type: GET_DATAS_FAIL,
        error: true,
        payload: new Error('Ошибка авторизации'),
      })
    }
  }
}
