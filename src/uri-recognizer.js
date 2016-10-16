export default class UriRecognizer {
  constructor() {
    this.top = { children: [], handlers: [] }
    this.anyHandlers = []
  }
  add(uri, handler) {
    if (typeof uri !== 'string')
      throw '`uri` should be string'

    if (typeof handler !== 'function')
      throw '`handler` should be function'
    
    if (uri === '*') {
      this.anyHandlers.push(handler)
      return
    }
    let node = this.top
    const splited = uri.split('/')
    for (let p of splited) {
      if (p.startsWith(':')) {
        let param = p.slice(1)
        let n = node.children.find(n => n.param === param)
        if (!n) {
          n = { param, path: false, handlers: [], children: [] }
          node.children.push(n)
        }
        node = n
      } else if (p.startsWith('*')) {
        let param = p.slice(1)
        let n = node.children.find(n => n.param === param)
        if (!n) {
          n = { param, path: true, handlers: [], children: [] }
          node.children.push(n)
        }
        node = n
      } else {
        let n = node.children.find(n => n.name === p)
        if (!n) {
          n = { name: p, handlers: [], children: [] }
          node.children.push(n)
        }
        node = n
      }

      node.handlers.push(handler)
      if (node.path) {
        break
      }
    }
  }
  recognize(uri) {
    if(typeof uri !== 'string')
      throw '`uri` should be string'

    const result = []
    const splited = uri.split('/')
    let explorer = [ { params: {} , node: this.top } ]
    for (let p of splited) {
      explorer = explorer.map(e => 
        e.node.children.filter(n => n.param || n.name === p).map(n => {
          let params = Object.assign({}, e.params)
          if (n.param) {
            params[n.param] = n.path ? splited.splice(splited.indexOf(p)).join('/') : p
          }
          if (n.path) {
            for (let handler of n.handlers)
              result.push({ uri, params, handler })
            return null
          }
          return {
            params,
            node: n
          }
        }).filter(_ => _ != null)
      ).reduce((a,b) => a.concat(b), [])
    }
    for (let e of explorer) {
      for (let handler of e.node.handlers)
        result.push({ uri, params: e.params, handler })
    }
    result.push
    for (let handler of this.anyHandlers) {
      result.push({ uri, params: {}, handler })
    }

    return result
  }
}
