export default function (pipeline, dispatcher) {

  pipeline.take('services.odata.org/V3/OData/OData.svc/Products', (context, response) => {
    if(response.status == 200) {
      const data = JSON.parse(response.body)
      console.log(data)
      pipeline.put('products', data.value)
    }
  })

  pipeline.take('products', (context, products) => {
    dispatcher.dispatch({
      type: 'SET_PRODUCTS',
      products
    })
  })

}
