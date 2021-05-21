import { size } from 'lodash';
import { API_URL } from '../utils/constants';

export async function getFavoritosApi(auth, idProduct) {
    try {
        const url = `${API_URL}/favoritos?user=${auth.idUser}&product=${idProduct}`
        const params = {
            headers: {
                "Content-Type": "application/json",
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

export async function addFavoritoApi(auth, idProduct) {
    try {
        const url = `${API_URL}/favoritos`;
        const params = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${auth.token}`
            },
            body: JSON.stringify({
                product: idProduct,
                user: auth.idUser
            })
        }
        const response = await fetch(url, params);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function deleteFavoritoApi(auth, idProduct) {
    try {
        const dataFound = await getFavoritosApi(auth, idProduct);
        if (size(dataFound) > 0) {
            const url = `${API_URL}/favoritos/${dataFound[0]?._id}`;
            const params = {
                method: 'DELETE',
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${auth.token}`
                },
            }
            const response = await fetch(url, params);
            const result = await response.json();
            return result;
        }
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function getFavoritosUserApi(auth) {
    try {
        const url = `${API_URL}/favoritos?user=${auth.idUser}`;
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
        console.log(error);
        return null;
    }
}