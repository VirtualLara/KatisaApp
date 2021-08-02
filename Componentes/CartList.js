import React, { useEffect } from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import { map, size } from 'lodash';

import ProductCarrito from './ProductCarrito';
import { getProductApi } from '../api/products';
import { colorMarca } from '../utils/colores';

export default function CartList(props) {

    const { carrito, products, setProducts, setReloadCarrito, setTotalPagar } = props;

    useEffect(() => {
        (async () => {
            const productTemp = [];
            let totalPagarTemp = 0;

            for await (const product of carrito) {
                const response = await getProductApi(product.idProduct);
                response.quantity = product.quantity;
                productTemp.push(response);

                totalPagarTemp += response.precio * response.quantity;
                setTotalPagar(totalPagarTemp);
            }

            setProducts(productTemp);
        })()
    }, [carrito])

    if (size(products) > 0) {
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
    } else {

        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator color={colorMarca} size={75} />
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: colorMarca }} > Obteniendo información...</Text>
            </View>
        )

    }

}
