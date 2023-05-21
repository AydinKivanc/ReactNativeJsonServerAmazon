import {View, Text, StyleSheet, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import Swiper from 'react-native-swiper';
import {AxiosInstance} from '../../utils/constants';

const HomeSlider = () => {
  const [sliders, setSliders] = useState([]);

  const axiosSliderData = async () => {
    const axiosResponse = await AxiosInstance.get('sliders');
    //console.log('Response', axiosResponse.data);
    setSliders(axiosResponse.data);
  };

  useEffect(() => {
    axiosSliderData();
  }, []);
  console.log('SLIDERS', sliders);
  // const slide = adImages.map((image, index) => (
  //   <View key={index}>
  //     <Image source={{uri: image}} style={styles.slide1} />
  //   </View>
  // ));

  const renderSlides = () => {
    return sliders.map((item, index) => {
      console.log('item response', item);
      const homePageSlide = item.find(
        slider => slider.imageFile === 'homeScreenAdd',
      );
      return (
        <View style={styles.slide1} key={index}>
          <Image
            source={{
              uri: homePageSlide?.images,
            }}
            style={{width: 100, height: 100, position: 'absolute'}}
            resizeMode="contain"
          />
          <Text style={styles.text}>dssdas</Text>
        </View>
      );
    });
  };

  return (
    <Swiper
      style={styles.swiperWrapper}
      //loop={true}
      //autoplay={true}
      transitionStyle="fade">
      {renderSlides()}
    </Swiper>
  );
};

export default HomeSlider;

const styles = StyleSheet.create({
  swiperWrapper: {},
  image: {
    height: 100,
    width: 100,
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: '#9DD6EB',
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
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
    position: 'absolute',
  },
});
