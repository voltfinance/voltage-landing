import React, { StrictMode } from 'react'
import { hot } from 'react-hot-loader'
import { ModalProvider } from 'react-modal-hook'
import Modal from 'react-modal'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { Switch, Route } from 'react-router'
import configureStore from './store/configureStore'
import GoogleAnalyticsReporter from '@/components/analytics'

import HomePage from '@/components/home'
import ScrollToTopController from '@/hooks/useScrollToTopController'
import { Web3Provider } from './context/web3'
import { ToastContainer } from 'react-toastify'

Modal.setAppElement('#root')

const { store, history } = configureStore(window.__INITIAL_STATE__)

const App = () => {
  return (
    <StrictMode>
      <ModalProvider>
        <Web3Provider>
          <Provider store={store}>
            <ConnectedRouter history={history}>
              <ScrollToTopController>
                <Route component={GoogleAnalyticsReporter} />
                <Switch>
                  <Route path='/'>
                    <HomePage />
                  </Route>
                </Switch>
                <ToastContainer position='top-right' />
              </ScrollToTopController>
            </ConnectedRouter>
          </Provider>
        </Web3Provider>
      </ModalProvider>
    </StrictMode>
  )
}

export default hot(module)(App)
