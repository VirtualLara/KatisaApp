import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { size } from 'lodash';

import { getBannersApi } from '../api/banners';
import { API_URL } from '../utils/constants';


const width = Dimensions.get('window').width;


export default function BannersComponent() {

    const [banners, setBanners] = useState([]);
    const [bannerActive, setBannerActive] = useState(0);
    const [loading, setLoading] = useState(false);

    const renderItem = ({ item }) => {
        return (
            <Image style={styles.ImgCarousel} source={{ uri: `${API_URL}${item.banner.url}` }} />
        )
    }

    useEffect(() => {
        (async () => {
            const response = await getBannersApi();
            setBanners(response);
            setLoading(true);
        })()
    }, [])

    if (loading) {
        return (
            <View style={styles.content} >
                <Carousel
                    layout={"default"}
                    //layout={"stack"}
                    //layout={"tinder"}
                    data={banners}
                    sliderWidth={width}
                    itemWidth={width}
                    renderItem={renderItem}
                    onSnapToItem={(Index) => setBannerActive(Index)}
                />
                <Pagination
                    dotsLength={size(banners)}
                    activeDotIndex={bannerActive}
                    inactiveDotOpacity={0.6}
                    inactiveDotScale={0.6}
                    containerStyle={styles.dotsContainer}
                    dotStyle={styles.dot}
                    inactiveDotStyle={styles.dot}
                />
            </View>
        )
    } else {
        return (
            <View style={styles.content} >
                <Text>...</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    content: {
        position: 'relative',
        height: 210,
        //backgroundColor: '#566573',
        backgroundColor: '#CCD1D1',
    },
    ImgCarousel: {
        width,
        height: 210,
        resizeMode: 'cover'
    },
    dotsContainer: {
        position: 'absolute',
        bottom: -20,
        width: "100%",
    },
    dot: {
        backgroundColor: '#fff'
    }
})