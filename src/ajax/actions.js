import * as actions from './action-types'

export function add(id, state, progress, xhr) {
  return {
    type: actions.ADD_AJAX,
    id,
    state,
    progress,
    xhr
  }
}
export function cancel(id) {
  return {
    type: actions.CANCEL_AJAX,
    id
  }
}
export function remove(id) {
  return {
    type: actions.REMOVE_AJAX,
    id
  }
}
export function removeRange(idList) {
  return {
    type: actions.REMOVE_AJAX,
    idList
  }
}
export function update(id, state, progress) {
  return {
    type: actions.UPDATE_AJAX_PROGRESS,
    id,
    state,
    progress
  }
}
