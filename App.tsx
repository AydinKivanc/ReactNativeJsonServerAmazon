/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Colors} from './src/utils/constants';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabNavigator from './src/routers/BottomTabNavigator';
import LinearGradient from 'react-native-linear-gradient';
import {MainContextProvider} from './src/context/MyContext';

function App(): JSX.Element {
  return (
    <MainContextProvider>
      <LinearGradient
        colors={[Colors.backgroundOne, Colors.backgroundTwo]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={styles.linearGradient}>
        <SafeAreaView style={styles.container}>
          <NavigationContainer>
            <BottomTabNavigator />
          </NavigationContainer>
        </SafeAreaView>
      </LinearGradient>
    </MainContextProvider>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    //backgroundColor: Colors.background,
  },
});

export default App;
