import { pipeline } from 'data-pipeline'
import store from '../store'

pipeline.take('services.odata.org/V3/OData/OData.svc/Products', response => {
  const data = JSON.parse(response.body)
  console.log(data)
  pipeline.put('products', data.value)
})

pipeline.take('products', products => {
  store.dispatch({
    type: 'SET_PRODUCTS',
    products
  })
})