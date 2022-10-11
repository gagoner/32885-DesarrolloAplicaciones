import { productTypes } from '../types'

const { FILTERED_PRODUCTS, SELECT_PRODUCT } = productTypes

export const selectProduct = id => ({
    type: SELECT_PRODUCT,
    productId: id
})

export const filteredProducts = id => ({
    type: FILTERED_PRODUCTS,
    categoryId: id
})