const VELOXXA_CONFIG = {
    "AVAILABLE_COUNTRIES": [
        "Albania",
        "Andorra",
        "Austria",
        "Belarus",
        "Belgium",
        "Bosnia and Herzegovina",
        "Bulgaria",
        "Croatia",
        "Cyprus",
        "Czech Republic",
        "Denmark",
        "Estonia",
        "Finland",
        "France",
        "Germany",
        "Greece",
        "Hungary",
        "Iceland",
        "Ireland",
        "Italy",
        "Latvia",
        "Liechtenstein",
        "Lithuania",
        "Luxembourg",
        "Malta",
        "Moldova",
        "Monaco",
        "Montenegro",
        "Netherlands",
        "North Macedonia",
        "Norway",
        "Poland",
        "Portugal",
        "Romania",
        "Serbia",
        "Slovakia",
        "Slovenia",
        "Spain",
        "Sweden",
        "Switzerland",
        "Ukraine",
        "Vatican City"
    ],
    "COD_COUNTRIES": [
        "Bulgaria",
        "Germany",
        "Greece"
    ],
    "FREE_SHIPPING_THRESHOLD": 1000.0,
    "FREE_MAX_WEIGHT": 10.0,
    "EXPRESS_TIERS": [
        {
            "max_w": 2,
            "price": 279.99
        },
        {
            "max_w": 6,
            "price": 579.99
        },
        {
            "max_w": 15,
            "price": 879.99
        },
        {
            "max_w": 40,
            "price": 1299.99
        }
    ],
    "SHIPPING_METHODS": [
        {
            "id": "standard",
            "name": "Standard Shipping",
            "desc": "Delivery estimate: 20\u201335 business days",
            "price": 0.0,
            "is_free_eligible": true,
            "use_weight_tiers": false
        },
        {
            "id": "express",
            "name": "Express Shipping",
            "desc": "Delivery estimate: 5\u201310 business days. Tracking number provided.",
            "price": 279.99,
            "is_free_eligible": false,
            "use_weight_tiers": true
        },
        {
            "id": "luxury",
            "name": "Luxury Delivery",
            "desc": "Delivery estimate: 1\u20132 business days. Tracking number provided.",
            "price": 2599.99,
            "is_free_eligible": false,
            "use_weight_tiers": false
        }
    ]
};