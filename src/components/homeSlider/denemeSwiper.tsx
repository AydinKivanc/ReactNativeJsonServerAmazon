import {View, Text, StyleSheet, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import Swiper from 'react-native-swiper';
import {AxiosInstance} from '../../utils/constants';

const HomeSlider = () => {
  const [adImages, setAdImages] = useState([]);

  const axiosAdImages = async () => {
    const axiosResponse = await AxiosInstance.get('sliders');
    const sliders = axiosResponse.data;
    const homePageSlider = sliders.find(slider => slider.name === 'HomePage');
    if (homePageSlider) {
      setAdImages(homePageSlider.images);
    }
  };
  useEffect(() => {
    axiosAdImages();
  }, []);
  console.log('AdImages', adImages);
  const slide = adImages.map((image, index) => (
    <View key={index}>
      <Image source={{uri: image}} style={styles.slide1} />
    </View>
  ));

  return (
    <Swiper
      style={styles.swiperWrapper}
      loop={true}
      autoplay={true}
      transitionStyle="fade">
      {slide}
    </Swiper>
  );
};

export default HomeSlider;

const styles = StyleSheet.create({
  swiperWrapper: {},
  image: {
    width: '100%',
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
