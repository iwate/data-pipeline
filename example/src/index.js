/*eslint no-unused-vars: 0*/

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import Products from './components/Products'
import History from './components/History'
import './activities'

const rootEl = document.getElementById('root')
const render = () => ReactDOM.render(
  <Provider store={store}>
    <main>
      <p>allow this resource <a href="https://services.odata.org/V3/OData/OData.svc/Products">https://services.odata.org/V3/OData/OData.svc/Products</a></p>
      <Products />
      <History />
    </main>
  </Provider>,
  rootEl)

render()
store.subscribe(render)


/** 
 * Trace dataflow in pipeline
 */
import { pipeline } from 'data-pipeline'
pipeline.take('*', function(context, ...payload) {
  console.log('TRACE', context.uri, ...payload);
})