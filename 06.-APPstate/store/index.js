import { createStore, combineReducers } from 'redux';

import { ProductReducer, CategoryReducer } from './reducers';

const rootReducer = combineReducers({
    products: ProductReducer,
    category: CategoryReducer,
})

export default createStore(rootReducer);