import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Input from '../../components/input';
import {Colors} from '../../utils/constants';

const CartScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inputBackground}>
        <Input />
      </View>
      <View>
        <Text>Cart Screen</Text>
      </View>
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
});

export default CartScreen;
