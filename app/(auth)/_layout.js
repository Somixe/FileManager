import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false}} />
        <Stack.Screen name="signUp" options={{ headerShown: false, animation: "none" }} />
        <Stack.Screen name="login" options={{ headerShown: false, animation: "none" }} />
        <Stack.Screen name="forgotPassword" options={{ headerShown: false }} />
        <Stack.Screen name="codeForgotPassword" options={{ headerShown: false }} />
        <Stack.Screen name="resetPassword" options={{ headerShown: false }} />
      </Stack>
    </>
  );
}
