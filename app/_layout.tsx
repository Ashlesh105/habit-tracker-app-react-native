import { Slot, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { AuthProvider } from "@/lib/auth-context";

export default function RootLayout() {
  const router = useRouter();
  const [isAuth, setIsAuth] = useState(false); // 🔹 replace with real auth check
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && !isAuth) {
      router.replace("/auth");
    }
  }, [mounted, isAuth]);

  if (!mounted) return null; // wait until app is ready

  return (
    <AuthProvider>
      <Slot/>
    </AuthProvider>
  );
}
