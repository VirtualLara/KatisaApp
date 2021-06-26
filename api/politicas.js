import { API_URL } from '../utils/constants';

export async function getPoliticasApi() {
    try {
        const url = `${API_URL}/politicas`;
        const response = await fetch(url);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
}