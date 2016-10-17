import React, { Component } from 'react'
import { bindActionCreators  } from 'redux'
import { connect } from 'react-redux'

function loadProducts() {
  return {
    type: 'SET_PRODUCTS',
    method: 'GET',
    url: 'http://services.odata.org/V3/OData/OData.svc/Products',
    opts: {
        headers: { accept: 'application/json' }
    }
  }
}

class Products extends Component {
  render() {
    const { products, loadProducts } = this.props
    return (
      <div>
        <button onClick={loadProducts}>LOAD</button>
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
}


function mapStateToProps(state) {
  return { products: state.products }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ loadProducts }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)