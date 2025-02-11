import 'unfetch/polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './contexts/UserContext'
import App from './components/App/App'
import './setup-icons'
import './index.css'
import * as serviceWorker from './serviceWorker'
import { WordProvider } from './contexts/Word'

ReactDOM.render(
  <BrowserRouter>
    <UserProvider>
      <WordProvider>
        <App />
      </WordProvider>
    </UserProvider>
  </BrowserRouter>,
  document.getElementById('root')
)

serviceWorker.unregister()
