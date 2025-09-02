import { Slot, Stack, useRouter } from "expo-router";
import { useEffect } from "react";

function RouteGuard() {
  const router = useRouter();
  const isAuth = false;
  useEffect(() => {
    if (!isAuth) {
      router.replace('/auth')
    }
  },[]);
  return <Slot/>
}

export default function RootLayout() {
  return (
    <RouteGuard>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </RouteGuard>
  );
}
