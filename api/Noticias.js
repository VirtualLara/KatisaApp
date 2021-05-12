import { API_URL } from '../utils/constants';

export async function getNoticiasApi() {
    try {
        const url = `${API_URL}/noticias`;
        const response = await fetch(url);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
}