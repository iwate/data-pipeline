export default {
  loadProducts() {
    return {
      type: 'LOAD_PRODUCTS',
      method: 'GET',
      url: 'https://services.odata.org/V3/OData/OData.svc/Products',
      opts: {
          headers: { accept: 'application/json' },
          withCredentials: true,
          tags: ['products', 'throw_middleware']
      }
    }
  }
}