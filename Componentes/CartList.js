import React, { useEffect } from 'react';
import { View, StyleSheet, } from 'react-native';
import { map } from 'lodash';

import ProductCarrito from './ProductCarrito';

import { getProductApi } from '../api/products';


export default function CartList(props) {

    const { carrito, products, setProducts, setReloadCarrito } = props;

    useEffect(() => {
        (async () => {
            const productTemp = [];

            for await (const product of carrito) {
                const response = await getProductApi(product.idProduct);
                response.quantity = product.quantity;
                productTemp.push(response);
            }

            setProducts(productTemp);
        })()
    }, [carrito])



    return (
        <View>
            {map(products, (product) =>
                <ProductCarrito
                    product={product}
                    setReloadCarrito={setReloadCarrito}
                    key={product._id}
                />
            )}
        </View>
    )
}
