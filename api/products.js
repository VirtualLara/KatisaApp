import { API_URL } from '../utils/constants';

export async function getProductsApi() {
    try {
        const url = `${API_URL}/products?activo=true`;
        const response = await fetch(url);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
}