import React from 'react'
import { hot } from 'react-hot-loader'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { Switch, Route } from 'react-router'
import configureStore from './store/configureStore'
import GoogleAnalyticsReporter from '@/components/analytics';

import HomePage from '@/components/home'
import ScrollToTopController from '@/hooks/useScrollToTopController'

const { store, history } = configureStore(window.__INITIAL_STATE__)

const App = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <ScrollToTopController>
          <Route component={GoogleAnalyticsReporter} />
          <Switch>
            <Route path='/'>
              <HomePage />
            </Route>
          </Switch>
        </ScrollToTopController>
      </ConnectedRouter>
    </Provider>
  )
}

export default hot(module)(App)
