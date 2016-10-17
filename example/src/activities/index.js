import store from '../store'
import { init as initDataPipeline } from 'data-pipeline'

initDataPipeline(store)

import './ProductsActivity'