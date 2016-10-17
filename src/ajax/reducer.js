import * as actions from './action-types'

export default function (state = [], action) {
  switch (action.type) {
    case actions.ADD_AJAX:
      return [ ...state, { id: action.id, state: action.state, progress: action.progress, xhr: action.xhr } ]

    case actions.REMOVE_AJAX:
      return state.filter(item => item.id !== action.id)
    
    case actions.REMOVE_AJAX_RANGE:
      return state.filter(item => action.idList.indexOf(item.id) === -1)

    case actions.UPDATE_AJAX_PROGRESS:
      return state.map(item => item.id === action.id ? { id: action.id, state: action.state, progress: action.progress, xhr: item.xhr } : item)

    default:
      return state
  }
}
