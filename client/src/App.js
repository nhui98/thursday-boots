import React from "react"
import { Routes, Route }  from "react-router-dom"

import "./App.scss"

import Navbar from "./components/navbar/navbar"
import Footer from "./components/footer/footer"
import Home from "./pages/home/home"
import ProductDetails from "./pages/product-details/product-details"
import ProductListing from "./pages/product-listing/product-listing"
import Delivery from "./pages/checkout-delivery/delivery"
import Signin from "./pages/account-signin/signin"
import Signout from "./pages/account-signout/signout"
import Payment from "./pages/checkout-payment/payment"
import NotFound from "./pages/404/404"
import Confirmation from "./pages/checkout-confirmation/confirmation"
import Register from "./pages/account-register/register"

const PageWithFooter = props => {
    return (
        <>
            {props.children}
            <Footer />
        </>
    )
}

const App = () => {
    return (
        <div className="thursday">
            <Routes>
                <Route path="/" element={<Navbar variant />} >
                    <Route index element={<PageWithFooter><Home /></PageWithFooter>} />
                </Route>
                <Route path="/product-listing/:category/:type" element={<Navbar />} >
                    <Route index element={<PageWithFooter><ProductListing /></PageWithFooter>} />
                </Route>
                <Route path="/product-details/:id" element={<Navbar />} >
                    <Route index element={<PageWithFooter><ProductDetails /></PageWithFooter>} />
                </Route>
                <Route path="/signin" element={<Navbar />} >
                    <Route index element={<Signin />} />
                </Route>
                <Route path="/register" element={<Navbar />} >
                    <Route index element={<Register />} />
                </Route>
                <Route path="/signout" element={<Signout />} />
                <Route path="/checkout/delivery" element={<Delivery />} />
                <Route path="/checkout/payment" element={<Payment />} />
                <Route path="/checkout/confirmation" element={<Confirmation /> }/>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    )
}

export default App
