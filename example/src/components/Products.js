import React, { Component } from 'react'

export default class Products extends Component {
  render() {
    const { products } = this.props
    console.log(this.props)
    return (
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
    )
  }
}

