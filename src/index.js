import React from 'react'
import ReactDOM from 'react-dom'
import runtime from 'serviceworker-webpack-plugin/lib/runtime'
import App from './App'

ReactDOM.render(
  <App />,
  document.getElementById('app')
)

if ('serviceWorker' in navigator) {
  const registration = runtime.register();
}

console.log("bananas")
