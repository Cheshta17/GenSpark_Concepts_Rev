import React, { PureComponent } from "react"

// Pure Component
class PureTaskCounter extends PureComponent {
  render() {
    return <div>Total Tasks: {this.props.count}</div>
  }
}

export default PureTaskCounter

