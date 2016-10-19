import React, { Component } from 'react'
import { bindActionCreators  } from 'redux'
import { connect } from 'react-redux'
import { ajaxActions } from 'data-pipeline'

class History extends Component {
  render() {
    const { requests, cancel, remove } = this.props
    return (
      <ul>
        { requests.map(req => (
          <li key={req.id}>
            <span>ID: { req.id }, State: { req.state }, Progress: { req.progress * 100 }%, Tags: { JSON.stringify(req.tags) } </span>
            { req.state === 'loading' 
              ? (<a href="#" onClick={cancel.bind(this, req.id)}>cancel</a>)
              : (<a href="#" onClick={remove.bind(this, req.id)}>remove</a>)}
          </li>
        ))}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  return { requests: state.ajaxRequests }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(ajaxActions, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(History)

