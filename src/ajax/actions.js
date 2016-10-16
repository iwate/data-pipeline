import * as actions from './action-types'

export function addAjax(id, state, progress, xhr) {
  return {
    type: actions.ADD_AJAX,
    state,
    progress,
    xhr
  }
}
export function cancelAjax(id) {
  return {
    type: actions.CANCEL_AJAX,
    id
  }
}
export function removeAjax(id) {
  return {
    type: actions.REMOVE_AJAX,
    id
  }
}
export function updateAjax(id, state, progress) {
  return {
    type: actions.UPDATE_AJAX_PROGRESS,
    id,
    state,
    progress
  }
}
