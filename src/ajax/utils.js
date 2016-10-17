import pipeline from '../pipeline'

export function putRequest(method, url, opts) {
  const addr = new URL(url)
  const uri = addr.host + addr.pathname
  pipeline.put(`requests/${uri}`, { method, url, opts })
} 