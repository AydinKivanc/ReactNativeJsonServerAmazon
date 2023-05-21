import React, {useContext, useEffect} from 'react';
import {View, FlatList, TouchableOpacity, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../../utils/constants';
import {MainContext} from '../../context/MyContext';

interface NavbarProps {
  stateName: string;
  getStateFunctionName: string;
}
const Navbar: React.FC<NavbarProps> = ({stateName, getStateFunctionName}) => {
  const {categories, axiosCategories, homeNav, axiosHomeNav} =
    useContext(MainContext);

  useEffect(() => {
    if (getStateFunctionName === 'axiosHomeNav') {
      axiosHomeNav();
    } else if (getStateFunctionName === 'axiosCategories') {
      axiosCategories();
    }
  }, []);

  // const data = [
  //   {id: '1', title: 'Electronics'},
  //   {id: '2', title: 'Item 2'},
  //   {id: '3', title: 'Item 3'},
  //   {id: '4', title: 'Item 4'},
  //   {id: '5', title: 'Item 5'},
  //   {id: '6', title: 'Item 6'},
  //   {id: '7', title: 'Item 7'},
  //   {id: '8', title: 'Item 8'},
  // ];

  const renderItem = ({item}: any) => (
    <TouchableOpacity style={styles.itemContainer}>
      <Text style={styles.itemText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <LinearGradient
      colors={[Colors.backgroundOne, Colors.backgroundTwo]}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      style={{height: 35}}>
      <View style={styles.container}>
        <FlatList
          data={
            stateName === 'categories'
              ? categories
              : stateName === 'homeNav'
              ? homeNav
              : []
          }
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </LinearGradient>
  );
};

const styles = {
  container: {
    flex: 1,
    paddingVertical: 1,
    paddingHorizontal: 10,
  },
  itemContainer: {
    paddingHorizontal: 10,
    paddingVertical: 1,
    //backgroundColor: '#009BA9',
    borderRadius: 10,
    marginRight: 10,
  },
  itemText: {
    fontSize: 16,
    fontWeight: 'normal',
    color: 'grey',
  },
};

export default Navbar;
