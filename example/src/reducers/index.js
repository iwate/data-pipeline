import { combineReducers } from 'redux'
import { ajaxRequests } from 'data-pipeline'
import products from './products'

export default combineReducers({ ajaxRequests, products })