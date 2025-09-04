import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import { Tabs, useRouter } from "expo-router";
import { useEffect } from "react";

function RouteGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const isAuth = false;
  useEffect(() => {
    if (!isAuth) {
      router.replace('/auth')
    }
  });
  return <>{children}</>
}
export default function TabLayout() {
  return (
    
    <RouteGuard>
      <Tabs screenOptions={{ tabBarActiveTintColor: "coral" }}>
      <Tabs.Screen name="index" options={{
        title: "Home",
        tabBarIcon: ({ color, focused }) => {
          return focused ? <FontAwesome5 name="home" size={24} color={color} /> : <AntDesign name="home" size={24} color={color} />
        }
      }} />
      <Tabs.Screen name="login" options={{ title: "Login" }} />
    </Tabs>
    </RouteGuard>
  );
}
