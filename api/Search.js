import { API_URL } from '../utils/constants';

export async function searchProducstApi(search) {
    try {
        //const url = `${API_URL}/products?_q=${search}&_limit=40`
        const url = `${API_URL}/products?_q=${search}`;
        const response = await fetch(url);
        const result = await response.json();
        return result;
    } catch (error) {
        return null;
        console.log(error)
    }
}