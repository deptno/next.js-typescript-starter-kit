import {Reducer} from 'redux'

const defaultState = {} as PersistState
export const reducer: Reducer<PersistState> = (state = defaultState, action) => {
  const {type, payload} = action
  switch (type) {
    case ActionTypes.SAVE_USER_INFO:
      return {
        ...state,
        userInfo: payload
      }
    default:
      return state
  }
}

enum ActionTypes {
  SAVE_USER_INFO = 'save user information'
}

export function saveUserInfo(userInfo) {
  return {
    type:    ActionTypes.SAVE_USER_INFO,
    payload: userInfo
  }
}

export interface PersistState {
  userInfo: any
}
