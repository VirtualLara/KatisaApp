import { API_URL } from '../utils/constants';

export async function getDireccionesApi(auth) {
    try {
        const url = `${API_URL}/direcciones?user=${auth.idUser}`
        const params = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${auth.token}`
            }
        }
        const response = await fetch(url, params);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error)
        return null
    }
}

export async function addNewDireccionApi(auth, direccion) {
    try {
        const url = `${API_URL}/direcciones`;
        const params = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${auth.token}`,
            },
            body: JSON.stringify({ user: auth.idUser, ...direccion })
        }
        const response = await fetch(url, params);
        const result = response.json();
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
}