import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { productData } from "../product-listing/data.js"

import "./product-details.scss"

const ProductDetails = () => {
    const [productType, setProductType] = useState(null)
    const [productDetails, setProductDetails] = useState(null)
    const [valid, setValid] = useState(true)
    const [details, setDetails] = useState({
        id: null,
        name: "",
        price: 0,
        color: "",
        img: "",
        size: 0,
    })
    const [displayImg, setDisplayImg] = useState("")

    const params = useParams()
    const navigate = useNavigate()
    
    useEffect(() => {
        if (!params.category || !params.style || !params.type || !params.color) {
            navigate(-1)
        } else {
            const t = productData[params.category][params.style][params.type]
            const t2 = t.find(product => product.color === params.color)
            setProductType(t)
            setProductDetails(t2)
            setDetails({
                id: t2.id,
                name: t2.name,
                price: t2.price,
                color: t2.color,
                img: t2.mainImg,
                size: 0,
            })
            setDisplayImg(t2.mainImg)
        }

    }, [params, navigate])

    const dispatch = useDispatch()

    const addToCartHandler = () => {
        if (!details.size || details.size === 0) {
            setValid(false)
        } else {
            setValid(true)
            console.log({...details, quantity: 1});
            dispatch({type: "ADD_ITEM_TO_BASKET", payload: {...details, quantity: 1}})
        }
    }

    return (
        <>
            { !productDetails || !productType ?
                (<div className="loading">Loading</div>) :
                (
                    <main className="productdetails">
                        <div className="productdetails__images">
                            {
                                productDetails.altImg
                                && <div className="productdetails__images-alt-wrapper">
                                    <div className={`productdetails__images-alt${displayImg === productDetails.mainImg ? " selected": ""}`} onClick={() => setDisplayImg(productDetails.mainImg)}>
                                        <img src={productDetails.mainImg} alt={`${productDetails.name} ${productDetails.color}`} />
                                    </div>
                                    {
                                        productDetails.altImg.map((altImg, i) =>
                                        <div className={`productdetails__images-alt${displayImg === altImg.src ? " selected": ""}`} key={`alt-img-${i}`} onClick={() => setDisplayImg(altImg.src)}>
                                            <img src={altImg.src} alt={`${productDetails.name} ${productDetails.color}`} />
                                        </div>
                                        )
                                    }
                                </div>                              
                            }
                            {
                                displayImg &&
                                <div className="productdetails__images-main">
                                    <img src={displayImg} alt={`${productDetails.name} ${productDetails.color}`} />
                                </div>
                            }           
                        </div>
                        <form className="productdetails__details">
                            <h2 className="productdetails__details-name">{productDetails.name}</h2>
                            <div className="productdetails__details-price">£{productDetails.price}</div>
                            <div className="product__details-color">color: {productDetails.color}</div>
                            <div className="productdetails__details-variation">
                                {
                                    productType.map((product, i) => 
                                        <Link to={product.to} key={`variation-img-${i}`} className={`productdetails__details-variation-img${product.color === productDetails.color ? " selected" : ""}`}>
                                            <img src={product.mainImg} alt={`${product.name} ${product.color}`} />
                                        </Link>
                                    )
                                }
                            </div>
                            <div className="productdetails__sizes">
                                <div className="productdetails__sizes-text">
                                    Size (UK): we recommend you order 1/2 size smaller than you wear in sneakers.
                                </div>
                                <div className="productdetails__sizes-grid">
                                    {
                                        productDetails.sizes &&
                                        productDetails.sizes.map((size, i) => {
                                            return size.stock > 0 ? (
                                                <div className={`productdetails__sizes-size${details.size === size.size ? " selected" : ""}`} key={`size-${i}`} onClick={() => setDetails(prevState => {
                                                    return { ...prevState, size: size.size }
                                                })}>
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