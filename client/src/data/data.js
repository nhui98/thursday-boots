export const homeCategoryGridData = [
    {
        name: "mens boots",
        src: "/images/home/category1.webp",
        to: "/product-listing/mens/boots",
        text: "men's boots"
    },
    {
        name: "womens boots",
        src: "/images/home/category2.webp",
        to: "/product-listing/womens/boots",
        text: "womens's boots"
    },
    {
        name: "dress shoes",
        src: "/images/home/category3.webp",
        to: "/product-listing/mens/shoes",
        text: "dress shoes"
    },
    {
        name: "mens jackets",
        src: "/images/home/category4.webp",
        to: "/product-listing/mens/jackets",
        text: "men's jackets"
    },
    {
        name: "mens sneakers",
        src: "/images/home/category5.webp",
        to: "/product-listing/mens/sneakers",
        text: "men's sneakers"
    },
    {
        name: "womens laceups",
        src: "/images/home/category6.webp",
        to: "/product-listing/womens/boots",
        text: "women's lace-ups"
    },
    {
        name: "high heels",
        src: "/images/home/category7.webp",
        to: "/product-listing/womens/boots",
        text: "high heels"
    },
]

export const homeFeaturedMenData = [
    {
        id: "623a4d67051c012d95ad1f95",
        category: "mens",
        type: "boots",
        style: "captain",
        price: 199.00,
        color: "black matte",
        src: "/images/mens/boots/captain/black/main.webp",
        src2: "/images/mens/boots/captain/black/alt1.webp",
    },
    {
        id: "623a52317d8a4e4aa4c8f205",
        category: "mens",
        type: "boots",
        style: "chelsea",
        price: 190.00,
        color: "grey",                          
        src: "/images/mens/boots/chelsea/grey/main.webp",
        src2: "/images/mens/boots/chelsea/grey/alt1.webp",
    },
    {
        id: "623a53cc31e2370aeb33bda8",
        category: "mens",
        type: "boots",
        style: "chukka",
        price: 160.00,
        color: "blue",
        src: "/images/mens/boots/chukka/blue/main.webp",
        src2: "/images/mens/boots/chukka/blue/alt1.webp",
        to: "/product-listing/mens/boots"
    },
    {
        id: "623a53cc31e2370aeb33bdb2",
        category: "mens",
        type: "sneakers",
        style: "lowtops",
        price: 120.00,       
        color: "black",
        src: "/images/mens/sneakers/lowtops/black/main.webp",
        src2: "/images/mens/sneakers/lowtops/black/alt1.webp",
    }
]

export const homeFeaturedWomenData = [
    {
        id: "623a54e5f258aa647ce8e225",
        category: "womens",
        type: "boots",
        style: "chelsea",
        price: 170.00,       
        color: "black",
        src: "/images/womens/boots/chelsea/black/main.webp",
        src2: "/images/womens/boots/chelsea/black/alt1.webp",
    },
    {
        id: "623a551b04b59382ec59bc37",
        category: "womens",
        type: "boots",
        style: "chelsea",
        price: 170.00,       
        color: "brown",
        src: "/images/womens/boots/chelsea/brown/main.webp",
        src2: "/images/womens/boots/chelsea/brown/alt1.webp",
    },
    {
        id: "623a551b04b59382ec59bc41",
        category: "womens",
        type: "boots",
        style: "heels",
        price: 190.00,       
        color: "black",
        src: "/images/womens/boots/heels/black/main.webp",
        src2: "/images/womens/boots/heels/black/alt1.webp"
    },
]

export const SitemapLinks = [
    {
        category: "shop",
        links: [
            {
                name: "men's boots",
                to: "/product-listing/mens/boots"
            },
            {
                name: "women's boots",
                to: "/product-listing/womens/boots"
            },
            {
                name: "men's sneakers",
                to: "/product-listing/mens/sneakers"
            },
            {
                name: "men's shoes",
                to: "/product-listing/mens/shoes"
            }
        ]
    },
    {
        category: "About",
        links: [
            {
                name: "Out Story",
                to: "/about"
            },
            {
                name: "review",
                to: "/reviews"
            }
        ]
    },
    {
        category: "support",
        links: [
            {
                name: "FAQ",
                to: "/faq"
            },
            {
                name: "Shipping & returns",
                to: "/shippinginfo"
            },
            {
                name: "Contact us",
                to: "/contact"
            }
        ]
    }
]

export const MenDropdownLinks = [
    {
        category: "boots",
        links: [
            {
                name: "Lace-Up",
                to: "/product-listing/mens/boots?style=captain"
            },
            {
                name: "Chelsea",
                to: "/product-listing/mens/boots?style=chelsea"
            },
            {
                name: "Chukka",
                to: "/product-listing/mens/boots?style=chukka"
            },
        ]
    },
    {
        category: "Sneakers",
        links: [
            {
                name: "Low Tops",
                to: "/product-listing/mens/sneakers?style=lowtops"
            },
            {
                name: "High Tops",
                to: "/product-listing/mens/sneakers?style=hightops"
            }
        ]
    },
    {
        category: "shoes",
        links: [
            {
                name: "Dress Shoes",
                to: "/product-listing/mens/shoes?style=dress"
            },
            {
                name: "Loafers",
                to: "/product-listing/mens/shoes?style=loafers"
            }
        ]
    },
]

export const WomenDropdownLinks = [
    {
        category: "boots",
        links: [
            {
                name: "Lace-Up",
                to: "/product-listing/womens/boots?style=captain"
            },
            {
                name: "Chelsea",
                to: "/product-listing/womens/boots?style=chelsea"
            },
            {
                name: "Heels",
                to: "/product-listing/womens/boots?style=heels"
            }
        ]
    },
]