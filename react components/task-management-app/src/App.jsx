import React from "react"
import ErrorBoundary from "./components/ErrorBoundary"
import TaskContainer from "./containers/TaskContainer"
import PureTaskCounter from "./components/PureTaskCounter"
import withLogging from "./components/withLogging"
import Button from "./components/Button"

const LoggedTaskContainer = withLogging(TaskContainer)

const App = () => {
  return (
    <ErrorBoundary>
      <div className="App">
        <LoggedTaskContainer />
        <PureTaskCounter count={0} />
        <Button onClick={() => console.log("Button clicked")}>Click me!</Button>
      </div>
    </ErrorBoundary>
  )
}

export default App

