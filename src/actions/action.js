import * as CONSTS from '../constant/const'
import axios from 'axios'

export const searchUserName = (searchKey) => {
  return async (dispatch) => {
    dispatch({ type: CONSTS.LOADING_DATA, payload: true })
    await axios.get(`https://api.github.com/search/users?q=${searchKey}&order=asc`).then((res) => {
      if (res.status === 200) {
        dispatch({ type: CONSTS.PROFILE_DATA, payload: res.data.items })
      } else {
        dispatch({ type: CONSTS.PROFILE_DATA, payload: [] })
      }
    })
  }
}
