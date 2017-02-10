import { createStore,  
  applyMiddleware,
  compose,
  StoreEnhancerStoreCreator } from 'redux';
const thunk = require('redux-thunk').default;  
import reducer from '../reducers/index';

const finalCreateStore = compose(  
  applyMiddleware(thunk)
)(createStore);

export default () => {  
  return finalCreateStore(reducer);
}