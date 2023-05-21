import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import Swiper from 'react-native-swiper';
import {AxiosInstance} from '../../utils/constants';

const HomeSlider = () => {
  const [adImages, setAdImages] = useState([]);

  const axiosAdImages = async () => {
    const axiosResponse = await AxiosInstance.get('sliders/1');
    setAdImages(axiosResponse.data.images);
    console.log('Response', JSON.stringify(axiosResponse.data, null, 4));
    console.log('Response2', adImages);
  };
  useEffect(() => {
    axiosAdImages();
  }, []);
  if (adImages === null) {
    return <Text>LOADING</Text>;
  }

  // const _renderItem = ({item}) => (
  //   <View>
  //     <Image
  //       source={{uri: item.images}}
  //       style={styles.image}
  //       resizeMode="contain"
  //     />
  //   </View>
  // );

  return (
    <Swiper
      style={styles.swiperWrapper}
      loop={true}
      autoplay={true}
      transitionStyle="fade">
      {/* <View>
        <Text>fdsd</Text>
      </View> */}
      {adImages.map((image, index) => (
        <View key={index}>
          <Image
            source={require('../../../assets/images/homeScreenAdd/r1.png')}
            style={styles.image}
          />
        </View>
      ))}
    </Swiper>

    // <View>
    //   <Image
    //     source={require('../../../assets/images/homeScreenAdd/r1.png')}
    //     style={styles.image}
    //     resizeMode="contain"
    //   />
    //   <FlatList
    //     data={adImages?.images}
    //     horizontal
    //     showsHorizontalScrollIndicator={false}
    //     renderItem={_renderItem}
    //     // keyExtractor={item => item.id.toString()}
    //   />
    // </View>
  );
};

export default HomeSlider;

const styles = StyleSheet.create({
  swiperWrapper: {},
  image: {
    width: 100,
    height: 100,
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
