export default {
  loadProducts() {
    return {
      type: 'LOAD_PRODUCTS',
      method: 'GET',
      url: 'http://services.odata.org/V3/OData/OData.svc/Products',
      opts: {
          headers: { accept: 'application/json' },
          tags: ['products', 'throw_middleware']
      }
    }
  }
}