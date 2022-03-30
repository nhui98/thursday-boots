import React, { lazy, Suspense } from "react"
import { Routes, Route }  from "react-router-dom"

import "./App.scss"

import Navbar from "./components/navbar/navbar"
import Footer from "./components/footer/footer"
import Home from "./pages/home/home"
import Loading from "./components/loading/loading"
const Signin = lazy(() => import("./pages/account-signin/signin"))
const Signout = lazy(() => import("./pages/account-signout/signout"))
const Payment = lazy(() => import("./pages/checkout-payment/payment"))
const NotFound = lazy(() => import("./pages/404/404"))
const Confirmation = lazy(() => import("./pages/checkout-confirmation/confirmation"))
const Register = lazy(() => import("./pages/account-register/register"))
const Delivery = lazy(() => import("./pages/checkout-delivery/delivery"))
const ProductListing = lazy(() => import("./pages/product-listing/product-listing"))
const ProductDetails = lazy(() => import("./pages/product-details/product-details"))

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
            <Suspense fallback={<Loading />}>
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
            </Suspense>         
        </div>
    )
}

export default App
