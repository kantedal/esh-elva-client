import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, Switch } from 'react-router'
import { createBrowserHistory } from 'history'
import { configureStore } from './store'
import { App } from './containers/App/App'
import {startChatServer} from './chatServer'

const store = configureStore()
const history = createBrowserHistory()
export let chatServer

startChatServer(store).then((server) => chatServer = server)

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
