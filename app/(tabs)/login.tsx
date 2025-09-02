import { StyleSheet, Text, View } from "react-native";
const styles = StyleSheet.create({
    home : {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})
export default function LoginScreen(){
    return (
        <View style={styles.home}>
        <Text> Login Screen</Text>
    </View>
    );
}