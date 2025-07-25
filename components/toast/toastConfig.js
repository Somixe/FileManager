import Entypo from '@expo/vector-icons/Entypo';
import { StyleSheet, Text, View } from 'react-native';

const toastConfig = {
  errorMessage: ({ text1 }) => (
    <View style={[styles.toastContainer, styles.toastError]}>
      <Entypo name="warning" size={24} color="#ff625b" />
      <Text style={styles.toastText}>{text1}</Text>
    </View>
  ),

  validMessage: ({ text1 }) => (
    <View style={[styles.toastContainer, styles.toastSuccess]}>
      <Entypo name="check" size={24} color="#2e7d32" />
      <Text style={styles.toastText}>{text1}</Text>
    </View>
  ),
};

const styles = StyleSheet.create({
  toastContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 15,
    width: 310,
    height: 43,
    marginTop: 28,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
    gap: 2,
  },
  toastText: {
    fontSize: 16,
    fontFamily: 'Gabarito',
    fontWeight: 'regular',
    color: '#000000ff',
  },
  toastError: {
    backgroundColor: '#F4AFAC',
    borderColor: '#D94C4C',
  },
  toastSuccess: {
    backgroundColor: '#B2E8C4',
    borderColor: '#2e7d32',
  },
});

export default toastConfig;
