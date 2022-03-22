import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addItemToBasket } from "../../redux/basket/basket-actions";
import { getProductDetails } from "../../redux/products/product-actions"

import "./product-details.scss"

import Loading from "../../components/loading/loading"
import Error from "../Error/error"
import NotFound from "../404/404"

const ProductDetails = () => {
    const [valid, setValid] = useState(true)
    const [selectedSize, setSelectedSize] = useState(0)
    const [displayImg, setDisplayImg] = useState(null)

    const params = useParams()
    const dispatch = useDispatch()
    const {loading, productDetails, error} = useSelector(state => state.product)
    
    useEffect(() => {
        dispatch(getProductDetails(params.id))
    }, [params, dispatch])


    const addToCartHandler = () => {
        if (!selectedSize || selectedSize === 0) {
            setValid(false)
        } else {
            setValid(true)
            dispatch(addItemToBasket({
                id: productDetails.id,
                style: productDetails.style,
                price: productDetails.price,
                color: productDetails.color,
                img: productDetails.mainImg,
                size: selectedSize,
                quantity: 1
            }))
        }
    }

    return (
        <>
            {
                loading ? (<Loading />) :
                !productDetails ? (<NotFound />) : 
                error ? (<Error />) :
                (
                    <main className="productdetails">
                        <div className="productdetails__images">
                            {
                                productDetails.altImg.length > 0
                                && <div className="productdetails__images-alt-wrapper">
                                    <div className={`productdetails__images-alt${displayImg === productDetails.mainImg ? " selected": ""}`} onClick={() => setDisplayImg(productDetails.mainImg)}>
                                        <img src={productDetails.mainImg} alt={`${productDetails.name} ${productDetails.color}`} />
                                    </div>
                                    {
                                        productDetails.altImg.map((altImg, i) =>
                                        <div className={`productdetails__images-alt${displayImg === altImg.src ? " selected": ""}`} key={`alt-img-${i}`} onClick={() => setDisplayImg(altImg.src)}>
                                            <img src={altImg.src} alt={`${productDetails.style} ${productDetails.color}`} />
                                        </div>
                                        )
                                    }
                                </div>                              
                            }
                            {
                                <div className="productdetails__images-main">
                                    <img src={!displayImg ? productDetails.mainImg : displayImg} alt={`${productDetails.style} ${productDetails.color}`} />
                                </div>
                            }           
                        </div>
                        <form className="productdetails__details">
                            <h2 className="productdetails__details-name">{productDetails.style}</h2>
                            <div className="productdetails__details-price">£{productDetails.price}</div>
                            <div className="product__details-color">color: {productDetails.color}</div>
                            {/* <div className="productdetails__details-variation">
                                {
                                    productType.map((product, i) => 
                                        <Link to={product.to} key={`variation-img-${i}`} className={`productdetails__details-variation-img${product.color === productDetails.color ? " selected" : ""}`}>
                                            <img src={product.mainImg} alt={`${product.name} ${product.color}`} />
                                        </Link>
                                    )
                                }
                            </div> */}
                            <div className="productdetails__sizes">
                                <div className="productdetails__sizes-text">
                                    Size (UK): we recommend you order 1/2 size smaller than you wear in sneakers.
                                </div>
                                <div className="productdetails__sizes-grid">
                                    {
                                        productDetails.sizes.length > 0 &&
                                        productDetails.sizes.map((size, i) => {
                                            return size.stock > 0 ? (
                                                <div className={`productdetails__sizes-size${selectedSize === size.size ? " selected" : ""}`} key={`size-${i}`} onClick={() => setSelectedSize(size.size)}>
                                                    {size.size}
                                                </div>
                                            ) : (
                                                <div className="productdetails__sizes-size disabled" key={`size-${i}`}>
                                                    {size.size}
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>

                            {
                                !valid && 
                                <div className="error">Please select a size</div>
                            }

                            <div className="button productdetails-btn" onClick={() => addToCartHandler()}>
                                add to cart
                            </div>
                            <div className="productdetails-shipping-info">
                                free shipping on orders over £250
                            </div>
                        </form>
                    </main >
                )
            }
        </> 
    ) 
}

export default ProductDetails