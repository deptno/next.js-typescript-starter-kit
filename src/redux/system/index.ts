import {REHYDRATE} from 'redux-persist/constants'
import {createActions, FAIL, REQUEST, SUCCESS} from '../common'
import {initializeGa} from '../log/index'
import {saveUserInfo} from '../persist/index'
import {Reducer} from 'redux'

const defaultState = {} as SystemState

export const reducer: Reducer<SystemState> = (state = defaultState, action) => {
  const {type, payload} = action
  switch (type) {
    case ActionTypes.BOOT:
      return {
        ...state,
        boot: true
      }
    case REHYDRATE:
      return {
        ...state,
        reHydrated: true
      }
    default:
      return state
  }
}

enum ActionTypes {
  BOOT    = 'boot',
  SESSION = 'session',
}

export function boot() {
  return {
    type: ActionTypes.BOOT
  }
}

const SESSION = createActions(ActionTypes.SESSION)

export function session() {
  return async (dispatch, getState) => {
    dispatch({type: SESSION[REQUEST]})
    try {
      const userInfo: any = await (async _ => {
        throw new Error('write session manging code')
      })()
      dispatch({type: SESSION[SUCCESS]})
      dispatch(saveUserInfo(userInfo))
      dispatch(initializeGa(userInfo.id))
    } catch (ex) {
      dispatch({type: SESSION[FAIL]})
      dispatch(initializeGa())
    } finally {
      dispatch(boot())
    }
  }
}

export interface SystemState {
  boot: boolean
  reHydrated: boolean
}

