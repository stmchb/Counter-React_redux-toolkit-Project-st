import React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import counterStore from './store/index.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={counterStore}>
      <App />
    </Provider>
  </React.StrictMode>
)
