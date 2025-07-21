import { Stack } from 'expo-router';
import React from 'react';

export default function Layout() {
  return (
    <>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false}} />
        <Stack.Screen name="signUp" options={{ headerShown: false, animation: "slide_from_right" }} />
        <Stack.Screen name="login" options={{ headerShown: false, animation: "slide_from_right" }} />
        <Stack.Screen name="forgotPassword" options={{ headerShown: false }} />
        <Stack.Screen name="codeForgotPassword" options={{ headerShown: false }} />
      </Stack>
    </>
  );
}
