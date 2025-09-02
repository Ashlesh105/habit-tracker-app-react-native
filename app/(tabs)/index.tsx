import { Link } from "expo-router";
import { StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  link: {
    width: 100,
    height: 50,
    borderColor: "black",
    borderWidth: 2,
    padding:5,
    borderRadius:5,
    backgroundColor:"blue",
    textAlign:"center"
  },
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
})
export default function Index() {
  return (
    <View
      style={styles.view}>
      <Link href="/login" style={styles.link}>Login</Link>
    </View>
  );
}
