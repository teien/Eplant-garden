const listProducts = [
    {
        id: 1,
        img:"https://cdn.shopify.com/s/files/1/0150/6262/products/The-Sill_HoyaCarnosa_Small_Hyde_Mint_Variant.jpg?v=1690598107&amp;width=400",
        name: "Hoya Carnosa Tricolor" ,
        price: "$68",
        type: "plant&tree",
        status: "Pet-friendly",
        size : "small"
    },
    {
        id: 2,
        img:"https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_aglaonema-wishes_medium_hyde_cream.jpg?v=1678485669",
        name: "Aglaonema Wishes" ,
        price: "$78",
        type: "plant&tree",
        status: "New Arrival",
        size : "medium"
    },
    {
        id: 3,
        img:"https://cdn.shopify.com/s/files/1/0150/6262/files/the-sill_Medium-Banana-Tree_Medium_Grant_Terracotta_Variant.jpg?v=1688757821",
        name: "Dwarf Banana Tree" ,
        price: "$78",
        type: "plant&tree",
        status: "New Arrival",
        size : "medium"
    },
    {
        id: 4,
        img:"https://cdn.shopify.com/s/files/1/0150/6262/files/the-sill_Medium-Calathea-Musaica_Medium_Hyde_Cream_Variant.jpg?v=1689778371",
        name: "Calathea Musaica" ,
        price: "$78",
        type: "plant&tree",
        status: "New Arrival",
        size : "medium"
    },
    {
        id: 5,
        img:"https://cdn.shopify.com/s/files/1/0150/6262/files/the-sill_Small-Summer-Succulent_Small_Grant_Terracotta_Variant_1.jpg?v=1691612990",
        name: "Summer Succulent" ,
        price: "$68",
        type: "plant&tree",
        status: "New Arrival",
        size : "small"
    },
    {
        id: 6,
        img:"https://cdn.shopify.com/s/files/1/0150/6262/products/The-Sill_Olive-Tree_Small_Hyde_Cream_Variant.jpg?v=1687298782",
        name: "Olive Tree" ,
        price: "$78",
        type: "plant&tree",
        status: "Pet-friendly",
        size : "small & medium"
    },
    {
        id: 7,
        img:"https://cdn.shopify.com/s/files/1/0150/6262/files/the-sill_Small-Staghorn-fern_Small_Grant_Terracotta_Variant_2.jpg?v=1691508976",
        name: "Staghorn Fern" ,
        price: "$38",
        type: "plant&tree",
        status: "Pet-friendly",
        size : "small"
    },
    {
        id: 8,
        img:"https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_fern_birds-nest_variant_medium_grant_black.jpg?v=1687366393",
        name: "Bird's Nest Fern" ,
        price: "$48",
        type: "plant&tree",
        status: "Pet-friendly",
        size : "medium"
    },
    {
        id: 9,
        img:"https://cdn.shopify.com/s/files/1/0150/6262/products/the_sill-variant-white_gloss-bromeliad_pink.jpg?v=1680539579",
        name: "Bromeliad Antonio Pink" ,
        price: "$78",
        type: "flower plants",
        status: "Pet-friendly",
        size : "small"
    },
    {
        id: 10,
        img:"https://cdn.shopify.com/s/files/1/0150/6262/products/the_sill-variant-white_gloss-bromeliad_red.jpg?v=1680539667",
        name: "Bromeliad Red Guzmania Hope" ,
        price: "$78",
        type: "flower plants",
        status: "Pet-friendly",
        size : "small"
    },
    {
        id: 11,
        img:"https://cdn.shopify.com/s/files/1/0150/6262/products/the_sill-variant-white_gloss-bromeliad_orange.jpg?v=1680540029",
        name: "Bromeliad Vriesea Intenso Orange" ,
        price: "$78",
        type: "flower plants",
        status: "Easy Care",
        size : "small"
    },
    
    {
        id: 12,
        img:"https://cdn.shopify.com/s/files/1/0150/6262/products/the_sill-variant-white_gloss-orchid_purple.jpg?v=1680542287",
        name: "Purple Orchid" ,
        price: "$88",
        type: "flower plants",
        status: "Easy Care",
        size : "small"
    },
    {
        id: 13,
        img:"https://cdn.shopify.com/s/files/1/0150/6262/products/the_sill-variant-white_gloss-orchid_white.jpg?v=1681923981",
        name: "White Orchid" ,
        price: "$88",
        type: "flower plants",
        status: "Easy Care",
        size : "small"
    },
    {
        id: 14,
        img:"https://cdn.shopify.com/s/files/1/0150/6262/products/the_sill-variant-white_gloss-orchid_yellow.jpg?v=1680545655",
        name: "Yellow Orchid" ,
        price: "$88",
        type: "flower plants",
        status: "Easy Care",
        size : "small"
    },
    {
        id: 15,
        img:"https://cdn.shopify.com/s/files/1/0150/6262/products/the_sill-variant-piedmont-orchid_pink.jpg?v=1680546299",
        name: "Petite Pink Orchid" ,
        price: "$68",
        type: "flower plants",
        status: "Pet-friendly",
        size : "small"
    },
    {
        id: 16,
        img:"https://cdn.shopify.com/s/files/1/0150/6262/products/the_sill-variant-piedmont-orchid_salmon.jpg?v=1680546216",
        name: "Petite Sunset Orchid" ,
        price: "$68",
        type: "flower plants",
        status: "Pet-friendly",
        size : "small"
    },
    {
        id: 17,
        img:"https://cdn.shopify.com/s/files/1/0150/6262/files/the-sill_Kalanchoe-Flapjack_Small_Hyde_Mint_Variant.jpg?v=1691008744",
        name: "Kalanchoe Flapjack" ,
        price: "$51",
        type: "plant&tree",
        status: "Easy Care",
        size : "small"
    },
    {
        id: 18,
        img:"https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_parlor-palm_variant_small_hyde_mint.jpg?v=1687365879",
        name: "Parlor Palm" ,
        price: "$51",
        type: "plant&tree",
        status: "Easy Care",
        size : "small"
    },
    {
        id: 19,
        img:"https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_Philodendron-Xanadu_Medium_Hyde_Cream.jpg?v=1687885294",
        name: "Philodendron Xanadu" ,
        price: "$59",
        type: "plant&tree",
        status: "Easy Care",
        size : "medium"
    },
    {
        id: 20,
        img:"https://cdn.shopify.com/s/files/1/0150/6262/files/the-sill_Medium-Snake-Moonshine_Medium_Hyde_Cream_Variant.jpg?v=1686664154",
        name: "'Moonshine' Snake Plant" ,
        price: "$78",
        type: "plant&tree",
        status: "Easy Care",
        size : "medium"
    },
]

export default function getListProducts(){
    return listProducts
}