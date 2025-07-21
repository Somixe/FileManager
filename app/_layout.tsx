import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Gabarito: require('../assets/fonts/Gabarito.ttf'),
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
