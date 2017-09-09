import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, Switch } from 'react-router'
import { createBrowserHistory } from 'history'
import { configureStore } from './store'
import { App } from './containers/App/App'
import {startChatServer} from './SocketServer'


const store = configureStore()
const history = createBrowserHistory()
const chatServer = startChatServer(store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route path='/' component={App} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
)
