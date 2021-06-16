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

export async function deleteDireccionApi(auth, idDireccion) {
    try {
        const url = `${API_URL}/direcciones/${idDireccion}`;
        params = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${auth.token}`,
            }
        }
        const response = await fetch(url, params);
        const result = response.json();
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function getDireccionApi(auth, idDireccion) {
    try {
        const url = `${API_URL}/direcciones/${idDireccion}`
        params = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${auth.token}`
            }
        }
        const response = await fetch(url, params);
        const result = response.json();
        return result;
    } catch (error) {
        console.log(error)
    }
}

export async function updateDireccionApi(auth, direccion) {
    try {
        const url = `${API_URL}/direcciones/${direccion._id}`;
        const params = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${auth.token}`,
            },
            body: JSON.stringify(direccion)
        }
        const response = await fetch(url, params);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
}