import { API_URL } from '../utils/constants';

export async function getFavoritosApi(auth, idProduct) {
    try {
        const url = `${API_URL}/favoritos?user=${auth.idUser}&product=${product}`
        const params = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${auth.token}`
            }
        }
        const response = await fetch(url, params)
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
}