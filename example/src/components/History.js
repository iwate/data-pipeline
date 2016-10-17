import React, { Component } from 'react'
import { bindActionCreators  } from 'redux'
import { connect } from 'react-redux'

function cancel(id) {
  return {
    type: 'CANCEL_AJAX',
    id
  }
}
function remove(id) {
  return {
    type: 'REMOVE_AJAX',
    id
  }
}

class History extends Component {
  render() {
    const { requests, cancel, remove } = this.props
    return (
      <ul>
        { requests.map(req => (
          <li key={req.id}>
            <span>ID: { req.id }, State: { req.state }, Progress: { req.progress * 100 }% </span>
            { req.state === 'loading' 
              ? (<a onClick={cancel.bind(this, req.id)}>cancel</a>)
              : (<a onClick={remove.bind(this, req.id)}>remove</a>)}
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
  return bindActionCreators({ cancel, remove }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(History)

