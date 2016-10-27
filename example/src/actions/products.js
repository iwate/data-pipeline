export default {
  loadProducts() {
    return {
      type: 'LOAD_PRODUCTS',
      method: 'GET',
      url: 'https://services.odata.org/V3/OData/OData.svc/Products',
      opts: {
          headers: { accept: 'application/json' },
          tags: ['products', 'through_middleware']
      }
    }
  }
}