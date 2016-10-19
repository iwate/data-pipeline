import store from '../store'
import { pipeline, initAjaxActivity } from 'data-pipeline'
import initProductsActivity from './ProductsActivity'

initAjaxActivity(pipeline, store)
initProductsActivity(pipeline, store)