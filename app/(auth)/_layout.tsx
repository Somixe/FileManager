import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack>
  <Stack.Screen name="index" options={{ title: "index", headerShown: false, animation: "none" }} />
  <Stack.Screen name="signUp" options={{ title: "signUp", headerShown: false, animation: "none"}} />
  <Stack.Screen name="forgotPassword" options={{ title: "forgotPassword", headerShown: false}} />
  <Stack.Screen name="codeForgotPassword" options={{ title: "codeforgotPassword", headerShown: false}} />
</Stack>
;
}
