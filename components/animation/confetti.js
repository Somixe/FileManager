import LottieView from 'lottie-react-native';
import { View } from 'react-native';

export default function Confetti({style}) {
  return (
    <View style={[{ postition:'absolute', top:0, left:0, right:0, zIndex:0, alignItems: 'center' }, style]}>
      <LottieView
        source={require('../../assets/animations/confetti.json')}
        autoPlay
        loop={false}
        style={{ width: 200, height: 200}}
      />
    </View>
  );
}
