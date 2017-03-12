import config from '../config'
import merge from 'lodash/merge'

export const TOGGLE_SHOW_NEXT_PIECE = 'TOGGLE_SHOW_NEXT_PIECE'
export const toggleShowNextPiece = () => ({
  type: TOGGLE_SHOW_NEXT_PIECE
})
export const getShowNextPiece = (state) => state.config.showNextPiece

export const TOGGLE_MIDNIGHT_MODE = 'TOGGLE_MIDNIGHT_MODE'
export const toggleMidnightMode = () => ({
  type: TOGGLE_MIDNIGHT_MODE
})
export const getMidnightMode = (state) => state.config.midnightMode

export const TOGGLE_DETERMINISTIC_MODE = 'TOGGLE_DETERMINISTIC_MODE'
export const toggleDeterministicMode = () => ({
  type: TOGGLE_DETERMINISTIC_MODE
})
export const getDeterministicMode = (state) => state.config.deterministicMode

const initialState = {
  showNextPiece: config.showNextPiece,
  midnightMode: config.midnightMode,
  deterministicMode: config.deterministicMode
}

const toggle = (state, key) => merge(state, {[key]: !state[key]})

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case TOGGLE_SHOW_NEXT_PIECE:
      return toggle(state, 'showNextPiece')
    case TOGGLE_MIDNIGHT_MODE:
      return toggle(state, 'midnightMode')
      case TOGGLE_DETERMINISTIC_MODE:
        return toggle(state, 'deterministicMode')
    default:
      return state
  }
}
