import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { AppProvider as PolarisProvider } from '@shopify/polaris'
import { PersistGate } from 'redux-persist/integration/react'
import { createMemoryHistory } from 'history'
import HttpsRedirect from 'react-https-redirect';
import App from './components/App'

import configureStore from './store'
import registerServiceWorker from './registerServiceWorker'

const history = createMemoryHistory();
const { store, persistor } = configureStore()

const root = createRoot(document.getElementById('root'))

root.render(
  <HttpsRedirect>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <PolarisProvider>
          <Router location={history.location} navigator={history}>
            <App />
          </Router>
        </PolarisProvider>
      </PersistGate>
    </Provider>
  </HttpsRedirect>
)

registerServiceWorker()
