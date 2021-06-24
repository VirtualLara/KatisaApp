import AsyncStorage from '@react-native-async-storage/async-storage';
import { size, map, filter } from 'lodash';
import { API_URL, CARRITO } from '../utils/constants';

export async function vaciarCarrito() {
    await AsyncStorage.removeItem(CARRITO);
}

export async function getProductCarritoApi() {
    //Elimina articulos del carrito...
    //await AsyncStorage.removeItem(CARRITO);
    try {
        const carrito = await AsyncStorage.getItem(CARRITO);
        if (!carrito) return [];
        return JSON.parse(carrito);
    } catch (error) {
        return null;
    }
}

export async function addProductCarrito(idProduct, quantity) {
    try {
        const carrito = await getProductCarritoApi();
        if (!carrito) throw "Error al obtener productos de carrito..."

        if (size(carrito) === 0) {
            carrito.push({
                idProduct,
                quantity,
            })
        } else {
            let found = false;
            map(carrito, (product) => {
                if (product.idProduct === idProduct) {
                    product.quantity += quantity;
                    found = true;
                    return product;
                }
            })

            if (!found) {
                carrito.push({
                    idProduct,
                    quantity,
                })
            }
        }

        await AsyncStorage.setItem(CARRITO, JSON.stringify(carrito));
        return true;
    } catch (error) {
        return false;
    }
}

export async function deleteProductCarritoApi(idProduct) {
    try {
        const carrito = await getProductCarritoApi();
        const newCarrito = filter(carrito, (product) => {
            return product.idProduct !== idProduct;
        })
        await AsyncStorage.setItem(CARRITO, JSON.stringify(newCarrito));
        return true;
    } catch (error) {
        return null;
    }
}

export async function incrementQuantityApi(idProduct) {
    try {
        const comprar = await getProductCarritoApi();
        map(comprar, (product) => {
            if (product.idProduct === idProduct) {
                return (product.quantity += 1);
            }
        })
        await AsyncStorage.setItem(CARRITO, JSON.stringify(comprar));
    } catch (error) {
        return null;
    }
}

export async function decrementQuantityApi(idProduct) {
    let isDelete = false;
    try {
        const comprar = await getProductCarritoApi();
        map(comprar, (product) => {
            if (product.idProduct === idProduct) {
                if (product.quantity === 1) {
                    isDelete = true;
                    return null;
                } else {
                    return (product.quantity -= 1);
                }
            }
        })
        if (isDelete) {
            await deleteProductCarritoApi(idProduct);
        } else {
            await AsyncStorage.setItem(CARRITO, JSON.stringify(comprar));
        }
        return true;
    } catch (error) {
        return null;
    }
}

export async function pagoCarritoApi(auth, tokenStripe, products, direccion) {
    try {
        const direccionenvio = direccion;
        delete direccionenvio.user;
        delete direccionenvio.createdAt;

        const url = `${API_URL}/ventas`;
        const params = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${auth.token}`,
            },
            body: JSON.stringify({
                tokenStripe,
                products,
                idUser: auth.idUser,
                direccionenvio,
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

export async function deleteCarritoApi() {
    try {
        await AsyncStorage.removeItem(CARRITO);
        return true;
    } catch (error) {
        return null;
    }
}