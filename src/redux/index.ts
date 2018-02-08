import {combineReducers} from 'redux'
import {reducer as persist, PersistState} from './persist'
import {reducer as system, SystemState} from './system'

export const reducer = combineReducers<RootState>({
  persist,
  system,
})

export interface RootState {
  persist: PersistState,
  system: SystemState,
}
