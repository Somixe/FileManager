import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Gabarito: require('../assets/fonts/Gabarito.ttf'),
<<<<<<< HEAD
    Freeman: require('../assets/fonts/Freeman-Regular.ttf')
=======
>>>>>>> ced0e7bf4425a9c854b2a96da8f9ac05db4d2fe8
  });

  if (!fontsLoaded){
    return null;
  }

  return (
    <>
      <StatusBar style="dark" translucent={false} />
      <Stack>
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      </Stack>
    </>
  );
}
