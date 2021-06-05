import AsyncStorage from '@react-native-async-storage/async-storage';
import { size, map, filter } from 'lodash';
import { COTIZACION } from '../utils/constants';

export async function getProductCotizacionApi() {
    //Elimina articulos del carrito...
    //await AsyncStorage.removeItem(COTIZACION);
    try {
        const cotizacion = await AsyncStorage.getItem(COTIZACION);
        if (!cotizacion) return [];
        return JSON.parse(cotizacion);
    } catch (error) {
        return null;
    }
}

export async function addProductCotizacionApi(idProduct, quantity) {
    try {
        const cotizacion = await getProductCotizacionApi();
        if (!cotizacion) throw "Error al obtener la cotizacion..."

        if (size(cotizacion) === 0) {
            cotizacion.push({
                idProduct,
                quantity,
            })
        } else {
            let found = false;
            map(cotizacion, (product) => {
                if (product.idProduct === idProduct) {
                    product.quantity += quantity;
                    found = true;
                    return product;
                }
            })

            if (!found) {
                cotizacion.push({
                    idProduct,
                    quantity,
                })
            }
        }

        await AsyncStorage.setItem(COTIZACION, JSON.stringify(cotizacion));
        return true;
    } catch (error) {
        return false;
    }
}

export async function deleteProductCotizacionApi(idProduct) {
    try {
        const cotizacion = await getProductCotizacionApi();
        const newCotizacion = filter(cotizacion, (product) => {
            return product.idProduct !== idProduct;
        })
        await AsyncStorage.setItem(COTIZACION, JSON.stringify(newCotizacion));
        return true;
    } catch (error) {
        return null;
    }
}

export async function incrementQuantityApi(idProduct) {
    try {
        const cotizar = await getProductCotizacionApi();
        map(cotizar, (product) => {
            if (product.idProduct === idProduct) {
                return (product.quantity += 1);
            }
        })
        await AsyncStorage.setItem(COTIZACION, JSON.stringify(cotizar));
    } catch (error) {
        return null;
    }
}

export async function decrementQuantityApi(idProduct) {
    let isDelete = false;
    try {
        const cotizar = await getProductCotizacionApi();
        map(cotizar, (product) => {
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
            await deleteProductCotizacionApi(idProduct);
        } else {
            await AsyncStorage.setItem(COTIZACION, JSON.stringify(cotizar));
        }
        return true;
    } catch (error) {
        return null;
    }
}