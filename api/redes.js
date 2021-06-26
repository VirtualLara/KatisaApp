import { API_URL } from '../utils/constants';

export async function getRedesApi() {
    try {
        const url = `${API_URL}/Aaaempresaredes`;
        const response = await fetch(url);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
}