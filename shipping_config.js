const SHIPPING_CONFIG = {
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
    "FREE_MAX_WEIGHT": 6.8,
    "EXPRESS_TIERS": [
        {
            "max_w": 2.2,
            "price": 89.99
        },
        {
            "max_w": 4.5,
            "price": 179.99
        },
        {
            "max_w": 6.8,
            "price": 279.99
        },
        {
            "max_w": 9.0,
            "price": 379.99
        },
        {
            "max_w": 18.0,
            "price": 599.99
        }
    ],
    "SHIPPING_METHODS": [
        {
            "id": "standard",
            "name": "Free Standard Shipping",
            "desc": "Delivery estimate: 20\u201335 business days. \nCustoms clearance & duties included.",
            "price": 0.0,
            "is_free_eligible": true,
            "use_weight_tiers": false
        },
        {
            "id": "express",
            "name": "Express Shipping",
            "desc": "Delivery estimate: 7\u201314 business days. \nCustoms clearance & duties included.",
            "price": 279.99,
            "is_free_eligible": false,
            "use_weight_tiers": true
        },
        {
            "id": "luxury",
            "name": "Luxury Delivery",
            "desc": "Delivery estimate: 2\u20133 business days. \nCustoms clearance & duties included. (50kg max)",
            "price": 2599.99,
            "is_free_eligible": false,
            "use_weight_tiers": false,
            "max_w": 50.0
        }
    ]
};
