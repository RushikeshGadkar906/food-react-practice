import axios from "axios";
import { PRODUCT_URL } from "./Url";

export function getProducts() {
    return axios.get(PRODUCT_URL);
}

// export function delProduct(id) {
//     return axios.delete(`${PRODUCT_URL}${id}`);
// }

// export function addProduct(data) {
//     return axios.post(PRODUCT_URL, data);
// }

// export function getProductById(id) {
//     return axios.get(`${PRODUCT_URL}${id}`);
// }