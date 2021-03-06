import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import history from './utils/history';
import configureStore from './configureStore';
import GlobalStyles from './styles/globalStyles'
const initialState = {};
const store = configureStore(initialState, history);

ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <GlobalStyles />
        <App />
      </ConnectedRouter>
    </Provider>,  
    document.getElementById('root')
);
