import React from "react"

// Higher Order Component
const withLogging = (WrappedComponent) => {
  return class extends React.Component {
    componentDidMount() {
      console.log(`Component ${WrappedComponent.name} mounted`)
    }

    render() {
      return <WrappedComponent {...this.props} />
    }
  }
}

export default withLogging

