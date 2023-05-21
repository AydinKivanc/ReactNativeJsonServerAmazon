import {Platform} from 'react-native';
import axios from 'axios';

export const Colors: any = {
  bgOne: '#009BA9',
  bgTwo: '#576CBC',
  bgThree: '#A5D7E8',
  bgWhite: '#EEEEEE',
  textOne: '#19376D',
  textTwo: '#576CBC',
  textThree: '#A5D7E8',
  textPrimary: '#0B2447',
  textWhite: '#EEEEEE',
  textPlaceHolder: '#BBBBBB',
  green: '#5D9C59',
  danger: '#F45050',
  modalBg: '#0000004D',
  modelBtnBorder: '#d6d4d5',
  modalBtnText: '#1987ff',
  black: '#000',
  white: '#fff',
  darker: '#464751',
  lighter: '#eee',
  background: '#ACEEDF',
  backgroundOne: '#72D6DE',
  backgroundTwo: '#98FFCD',
  inputBorder: '#BBBBBB',
};

export const FontFamilies: any = {
  light: 'Poppins-Light',
  extraLight: 'Poppins-ExtraLight',
  regular: 'Poppins-Regular',
  semiBold: 'Poppins-SemiBold',
  bold: 'Poppins-Bold',
  extraBold: 'Poppins-ExtraBold',
};

export const AxiosInstance: any = axios.create({
  baseURL:
    Platform.OS === 'android'
      ? 'https://e36a-84-65-154-3.eu.ngrok.io/'
      : 'http://localhost:3010/',
});
