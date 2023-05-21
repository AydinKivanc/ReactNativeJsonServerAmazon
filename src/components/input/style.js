import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/constants';

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 5,
    marginBottom: 15,
    alignItems: 'center',
  },
  input: {
    flex: 1,
    //borderWidth: 1,
    //borderColor: Colors.inputBorder,
    borderRadius: 6,
    height: 45,
    paddingHorizontal: 10,
    color: Colors.textOne,
    fontSize: 16,
    shadowColor: 'black', // Gölgenin rengi
    shadowOffset: {width: 0, height: 2}, // Gölgenin konumu (genişlik ve yükseklik)
    shadowOpacity: 0.2, // Gölgenin opaklığı
    shadowRadius: 2, // Gölgenin yayılma yarıçapı
    elevation: 2, // Android'de gölgeyi etkinleştirir
  },
  icon: {
    //fontSize: 40,
    color: Colors.bgOne,
    marginLeft: 10,
  },
});
export default styles;
