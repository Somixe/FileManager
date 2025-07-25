import { Platform } from 'react-native';

const iosShadow = {
  shadowColor: '#000',
  shadowOffset: { width: 4, height: 4 },
  shadowOpacity: 0.20,
  shadowRadius: 4,
};

const androidShadow = {
  elevation: 5,
};

export const shadowStyle = Platform.select({
  ios: iosShadow,
  android: androidShadow,
});
