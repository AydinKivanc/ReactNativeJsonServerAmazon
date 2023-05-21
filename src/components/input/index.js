import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './style';
import {Colors} from '../../utils/constants';
import Icon from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';

const Input = ({
  placeholder = 'Search Amazon.co.uk',
  placeholderTextColor = Colors.textPlaceHolder,
  keyboardType = 'default',
  multiline = false,
  hasIcon = false,
  iconName = 'plus',
  styleIcon = styles.icon,
  onIconPress = () => {},
  value = '',
  onChangeText = () => {},
}) => {
  return (
    <LinearGradient
      colors={[Colors.backgroundOne, Colors.backgroundTwo]}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      //style={styles.linearGradient}
    >
      <View style={styles.wrapper}>
        <TextInput
          style={styles.input}
          placeholderTextColor={placeholderTextColor}
          placeholder={placeholder}
          keyboardType={keyboardType}
          multiline={multiline}
          value={value}
          onChangeText={onChangeText}
          backgroundColor="white"
        />
        {hasIcon && (
          <TouchableOpacity onPress={onIconPress}>
            <Icon name={iconName} style={styleIcon} />
          </TouchableOpacity>
        )}
      </View>
    </LinearGradient>
  );
};

export default Input;
