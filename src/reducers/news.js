import {
  GET_DATAS_REQUEST,
  GET_DATAS_SUCCESS,
  GET_DATAS_FAIL,
} from '../actions/NewsActions'

const initialState = {
  news: [],
  isLoading: false,
  error: '',
}

export function newsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_DATAS_REQUEST:
      return { ...state, isLoading: true, error: '' }

    case GET_DATAS_SUCCESS:
      return { ...state, news: action.payload, isLoading: false, error: '' }
    case GET_DATAS_FAIL:
      return { ...state, error: action.payload.message, isLoading: false }

    default:
      return state
  }
}
