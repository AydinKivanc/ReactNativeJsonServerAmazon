import {View, Text, StyleSheet, FlatList, Button} from 'react-native';
import React, {useContext, useEffect} from 'react';
import Input from '../../components/input';
import {Colors} from '../../utils/constants';
import Navbar from '../../components/navbar';
import {MainContext} from '../../context/MyContext';
import Swiper from 'react-native-swiper';
import HomeSlider from '../../components/homeSlider';

const HomeScreen: React.FC = () => {
  const {products, axiosProducts, setProducts} = useContext(MainContext);

  useEffect(() => {
    axiosProducts();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.inputBackground}>
        <Input />
      </View>
      <View style={styles.navbar}>
        <Navbar stateName={'homeNav'} getStateFunctionName={'axiosHomeNav'} />
      </View>
      <View>
        <Text>HomeScreen </Text>
        <FlatList
          data={products}
          ListHeaderComponent={() => (
            <View
              style={{
                flexDirection: 'row',
                marginTop: 5,
                justifyContent: 'center',
              }}>
              <Button title="Load" onPress={() => axiosProducts()} />
              <Button title="Delete" onPress={() => setProducts([])} />
            </View>
          )}
          ListEmptyComponent={() => (
            <View>
              <Text>There is no any data</Text>
            </View>
          )}
          // renderItem={props => (
          //   <View style={{paddingVertical: 15}}>
          //     <Text>{props.item.category}</Text>
          //   </View>
          // )}
          renderItem={({item}) => (
            <View style={{paddingVertical: 15}}>
              <Text>{item.category}</Text>
            </View>
          )}
          keyExtractor={item => item.id.toString()}
        />
      </View>
      {/* <View style={{height: 450}}>
        <Swiper
          style={styles.swiperWrapper}
          loop={true}
          autoplay={true}
          transitionStyle="fade">
          <View style={styles.slide1}>
            <Text style={styles.text}>Slide 1</Text>
          </View>
          <View style={styles.slide2}>
            <Text style={styles.text}>Slide 2</Text>
          </View>
          <View style={styles.slide3}>
            <Text style={styles.text}>Slide 3</Text>
          </View>
        </Swiper>
      </View> */}
      {/* <View style={{height: 450}}>
        <HomeSlider />
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  inputBackground: {
    backgroundColor: Colors.background,
  },
  navbar: {
    height: 35,
  },
  swiperWrapper: {},
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

export default HomeScreen;
