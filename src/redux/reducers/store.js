import{createStore} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import rootReducer from './index'
//import { persistStore, persistReducer } from 'redux-persist'
//import storage from 'redux-persist/lib/storage'

/* const persistConfig = {
    key: 'root',
    storage,
  }
const persistedReducer = persistReducer(persistConfig, rootReducer) */
 const store=createStore(rootReducer,composeWithDevTools())

//export const persistedStore=persistStore(store);
export default store;