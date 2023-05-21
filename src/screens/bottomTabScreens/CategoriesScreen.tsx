import {View, Text, StyleSheet, FlatList, Button} from 'react-native';
import React, {useContext, useEffect} from 'react';
import Input from '../../components/input';
import {Colors} from '../../utils/constants';
import Navbar from '../../components/navbar';
import {MainContext} from '../../context/MyContext';

const CategoriesScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inputBackground}>
        <Input />
      </View>
      <View style={styles.navbar}>
        <Navbar
          stateName={'categories'}
          getStateFunctionName={'axiosCategories'}
        />
      </View>
      <View>
        <Text>Categories Screen</Text>
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
  navbar: {
    height: 35,
  },
});

export default CategoriesScreen;
