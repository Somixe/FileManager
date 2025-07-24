// Ce fichier définit la structure principale de l'application avec une navigation par pile (Stack)
// et charge les polices personnalisées avant de rendre l'interface.

import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

export default function RootLayout() {
  // Chargement des polices personnalisées (bloque le rendu tant qu'elles ne sont pas prêtes)
  const [fontsLoaded] = useFonts({
    Gabarito: require('../assets/fonts/Gabarito.ttf'),
    Freeman: require('../assets/fonts/Freeman-Regular.ttf')
  });

  if (!fontsLoaded) {
    return null; // Empêche l'affichage prématuré de l'interface sans les bonnes polices
  }

  return (
    <>
      <StatusBar style="dark" />
      {/* Configuration de la pile de navigation principale */}
      <Stack>
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      </Stack>
    </>
  );
}
