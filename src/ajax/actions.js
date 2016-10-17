import * as actions from './action-types'

export function addAjax(id, state, progress, xhr) {
  return {
    type: actions.ADD_AJAX,
    id,
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
export function removeAjaxRange(idList) {
  return {
    type: actions.REMOVE_AJAX,
    idList
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
