import React from 'react'
import ReactDOM from 'react-dom'
import store from './store'
import Products from './components/Products'
import './activities/ProductsActivity'

const loadProducts = () => {
    store.dispatch({
        type: 'SET_PRODUCTS',
        method: 'GET',
        url: 'http://services.odata.org/V3/OData/OData.svc/Products',
        opts: {
            headers: { accept: 'application/json' }
        }
    })
}
const rootEl = document.getElementById('root')
const render = () => ReactDOM.render(
  <main>
    <Products products={store.getState()}/>
    <button onClick={loadProducts}>LOAD</button>
  </main>,
  rootEl
)

render()
store.subscribe(render)