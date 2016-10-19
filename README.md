# Data Pipeline
data convert pattern library for redux.
[iwate.github.com/data-pipeline](https://iwate.github.com/data-pipeline)

[Demo](http://iwate.github.com/data-pipeline/demo)

# How to use
## Install
  Install from npm

  npm install data-pipeline

## Setup
Setup Reducers, Store, and Activities.

```js
/**
 * reducer
 */
import { combineReducers } from 'redux'
import { ajaxRequests } from 'data-pipeline'

const reducers combineReducers({ ajaxRequests, /* more reducers! */ })

/**
 * store
 */
import { createStore, applyMiddleware } from 'redux'
import { cancelAjax, putReqToPipeline } from 'data-pipeline'

const createStoreWithMiddleware = applyMiddleware(
  cancelAjax,
  putReqToPipeline,
)(createStore)
const store = createStoreWithMiddleware(reducers)

/**
 * activities
 */
import { pipeline, initAjaxActivity } from 'data-pipeline'
import initProductsActivity from './ProductsActivity'

initAjaxActivity(pipeline, store)
// more activities...
// ex. initProductsActivity(pipeline, store)
```

## License
The MIT License (MIT)
Copyright (c) 2016 iwate

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.