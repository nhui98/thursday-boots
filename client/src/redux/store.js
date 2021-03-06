import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"
import { basketReducer } from "./basket/basket-reducers"
import { deliveryAddressReducer } from "./delivery/delivery-reducers"
import { paymentReducer } from "./payment/payment-reducers"
import { productDetailsReducer, productsReducer } from "./products/product-reducers"
import { userReducer } from "./user/user-reducers"
import { orderReducer } from "./order/order-reducer"

const reducers = combineReducers({
    products: productsReducer,
    product: productDetailsReducer,
    basket: basketReducer,
    deliveryAddress: deliveryAddressReducer,
    user: userReducer,
    payment: paymentReducer,
    order: orderReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
    reducers,
    composeEnhancer(applyMiddleware(thunk))
)

export default store