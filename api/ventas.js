import { API_URL } from '../utils/constants';

export async function getVentasApi(auth) {
    try {
        const url = `${API_URL}/ventas?user=${auth.idUser}&_sort=published_at:DESC`;
        const params = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${auth.token}`
            }
        }
        const response = await fetch(url, params);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function getVentaIdApi(auth, id) {
    try {
        const url = `${API_URL}/ventas?id=${id}`;
        const params = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${auth.token}`
            }
        }
        const response = await fetch(url, params);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
}