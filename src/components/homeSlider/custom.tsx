import {StyleSheet, Text, View, Animated, PanResponder} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import {AxiosInstance} from '../../utils/constants';

const HomeSlider = () => {
  const [adImages, setAdImages] = useState([]);
  const [currentAdIndex, setCurrentAdIndex] = useState(0);
  console.log('>>>>', currentAdIndex);

  const axiosAdImages = async () => {
    const axiosResponse = await AxiosInstance.get('sliders');
    console.log('Response', axiosResponse.data);
    setAdImages(axiosResponse.data);
    if (currentAdIndex >= axiosResponse.data.length) {
      setCurrentAdIndex(0);
    }
    console.log('AdImages', adImages);
  };
  useEffect(() => {
    axiosAdImages();
  }, []);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentAdIndex(prevIndex => (prevIndex + 1) % adImages.length);
    }, 3000); // 3 saniye
    console.log('After timer');
    return () => clearInterval(timer);
  }, []);

  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500, // 0.5 saniye
      useNativeDriver: true,
    }).start();
  }, [currentAdIndex]);

  useEffect(() => {
    fadeAnim.setValue(0);
  }, [currentAdIndex]);

  const currentAdImage = adImages.length > 0 ? adImages[currentAdIndex] : null;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderRelease: (e: any, gestureState: any) => {
        if (gestureState.dx < -50) {
          // Kaydırma sola doğru yapıldı
          setCurrentAdIndex(prevIndex => (prevIndex + 1) % adImages.length);
        } else if (gestureState.dx > 50) {
          // Kaydırma sağa doğru yapıldı
          setCurrentAdIndex(
            prevIndex => (prevIndex - 1 + adImages.length) % adImages.length,
          );
        }
      },
    }),
  ).current;
  return (
    <View style={styles.adContainer} {...panResponder.panHandlers}>
      <Animated.Image
        source={currentAdImage}
        style={[styles.adImage, {opacity: fadeAnim}]}
      />
    </View>
  );
};

export default HomeSlider;

const styles = StyleSheet.create({
  adContainer: {
    height: 450,
  },
  adImage: {
    height: '100%',
    width: '100%',
  },
});
