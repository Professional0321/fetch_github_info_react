import * as CONSTS from '../constant/const'

let defaultState = { loading: false, profileData: [] }

export default (state = defaultState, action) => {
  switch (action.type) {
    case CONSTS.LOADING_DATA:
      return {
        ...state,
        loading: action.payload,
      }
    case CONSTS.PROFILE_DATA:
      return {
        ...state,
        loading: false,
        profileData: action.payload,
      }
    default:
      return state
  }
}
