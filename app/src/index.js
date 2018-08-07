import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';

import api from './middleware/api';
import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers/reducers';

// Components
import Home from './components/Home';

const composeEnhancers =
typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  : compose;

const enhancer = composeEnhancers(applyMiddleware(reduxThunk, api));
const store = createStore(reducers, enhancer);

ReactDOM.render(
<Provider store={store}>
    <Home />
</Provider>, 
document.getElementById('root'));
registerServiceWorker();
