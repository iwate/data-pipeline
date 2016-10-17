import React, { Component } from 'react'
import { bindActionCreators  } from 'redux'
import { connect } from 'react-redux'
import actions from '../actions/products'
import { putRequest } from 'data-pipeline'

class Products extends Component {
  render() {
    const { products, loadProducts } = this.props
    return (
      <div>
        <button onClick={loadProducts}>LOAD(dispatch)</button>
        <button onClick={this.loadProducts.bind(this)}>LOAD(direct put pipeline)</button>
        <table>
          <thead>
            <tr>
              <th>ID</th><th>Name</th><th>Price</th><th>Description</th>
            </tr>
          </thead>
          <tbody>
            {products.map(p => (
              <tr key={p.ID}>
                <th>{p.ID}</th><th>{p.Name}</th><th>{p.Price}</th><th>{p.Description}</th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
  /**
   * Dispatchする代わりに、直接Pipelineに載せても良い
   */
  loadProducts() {
    putRequest('GET', 'http://services.odata.org/V3/OData/OData.svc/Products', {
      headers: { accept: 'application/json' }
    })
  }
}

function mapStateToProps(state) {
  return { products: state.products }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)