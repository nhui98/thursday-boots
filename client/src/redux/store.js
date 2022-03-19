import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"
import { basketReducer } from "./basket/basket-reducers"
import { deliveryAddressReducer } from "./delivery/delivery-reducers"

const reducers = combineReducers({
    basket: basketReducer,
    delivery: deliveryAddressReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
    reducers,
    composeEnhancer(applyMiddleware(thunk))
)

export default store