import React, {useRef, useEffect} from 'react';
import {View, Image, Animated} from 'react-native';

const Banner = ({images}) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    startAnimation();
  }, []);

  const startAnimation = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      // Animasyon tamamlandığında bir sonraki resme geçmek için
      // burada gerekli işlemleri yapabilirsiniz.
      // Örneğin, bir dizi içinde resimleri tutabilir ve index'i
      // güncelleyerek sıradaki resme geçebilirsiniz.
    });
  };

  return (
    <View>
      {images.map((image, index) => {
        return (
          <Animated.View
            key={index}
            style={{
              opacity: fadeAnim,
              position: 'absolute',
              top: 0,
              left: 0,
            }}>
            <Image source={image} />
          </Animated.View>
        );
      })}
    </View>
  );
};

export default Banner;
