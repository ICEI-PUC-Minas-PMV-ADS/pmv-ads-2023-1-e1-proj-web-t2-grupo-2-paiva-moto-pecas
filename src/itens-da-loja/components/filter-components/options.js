import { products } from '../../../database/produtos/produtos-db.js';
import { servicos } from '../../../database/serviços/servicos-db.js';

const brandsProducts = products.map((product) => {
    return product.brand
})
const categoriesProducts = products.map((product) => {
    return product.category
})
const allIProductsOptions = [...brandsProducts, ...categoriesProducts]
.filter((value, index, arr) => arr.indexOf(value) === index);

export const OptionsWithoutSpacesProducts = []
allIProductsOptions.map((option) => {
    OptionsWithoutSpacesProducts.push(option.split(' ').join(""))
})

const categoriesServices = servicos.map((service) => {
    return service.category
})
const allIServicesOptions = categoriesServices.filter((value, index, arr) => arr.indexOf(value) === index);

export const OptionsWithoutSpacesServices = []
allIServicesOptions.map((option) => {
    OptionsWithoutSpacesServices.push(option.split(' ').join(""))
})