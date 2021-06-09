import { API_URL } from '../utils/constants';

export async function getCitysApi() {
    try {
        const url = `${API_URL}/ciudads`;
        const response = await fetch(url);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function getStoresXalapaApi() {
    try {
        const url = `${API_URL}/sucursals?_sort=namesuc&city.id=60957a5d05b9d922bc880e2b`;
        const response = await fetch(url);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
}
export async function getStoresVeracruzApi() {
    try {
        const url = `${API_URL}/sucursals?_sort=namesuc&city.id=60957a6d05b9d922bc880e2c`;
        const response = await fetch(url);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
}
export async function getStoresCordobaApi() {
    try {
        const url = `${API_URL}/sucursals?_sort=namesuc&city.id=60957a7705b9d922bc880e2d`;
        const response = await fetch(url);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function getInfoSucApi(tda) {
    try {
        const url = `${API_URL}/sucursals?namesuc=${tda}`;
        const response = await fetch(url);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
}

