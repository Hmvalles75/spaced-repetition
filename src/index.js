import 'unfetch/polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './contexts/UserContext'
import App from './components/App/App'
import './setup-icons'
import './index.css'
import * as serviceWorker from './serviceWorker'
import { WordsProvider } from './contexts/Words'

ReactDOM.render(
  <BrowserRouter>
    <UserProvider>
      <WordsProvider>
        <App />
      </WordsProvider>
    </UserProvider>
  </BrowserRouter>,
  document.getElementById('root')
)

serviceWorker.unregister()
