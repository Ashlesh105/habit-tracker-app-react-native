import { useAuth } from "@/lib/auth-context";
import { useRouter } from "expo-router";
import { useState } from "react";
import { KeyboardAvoidingView, Platform, StyleSheet, View } from "react-native";
import { Button, Text, TextInput, useTheme } from "react-native-paper";

export default function AuthScreen() {
    const [isSignUp, setIsSignUp] = useState<boolean>(false);
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [error, setError] = useState<string | null>("");
    const theme = useTheme()
    const router = useRouter()
    const { signUp, signIn } = useAuth();
    const handleAuth = async () => {
        if (!email || !password) {
            setError('Please fill in all the fields')
            return
        }

        if (password.length < 6) {
            setError('Password length should be greater than 6')
            return
        }
        setError(null)

        if (isSignUp) {
            const error = await signUp(email, password)
            if (error) {
                setError(error)
                return
            }
        } else {
            const error = await signIn(email, password)
            if (error) {
                setError(error)
                return
            }
            router.replace('/')
        }

    }
    const handleSwitch = () => {
        setIsSignUp((prev) => !prev);
    }
    return (
        <KeyboardAvoidingView style={style.container} behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <View style={style.content} >
                <Text variant="headlineMedium" style={style.title}>{isSignUp ? "Create Account" : "Welcome Back!!"}</Text>
                <TextInput
                    style={style.input1}
                    label="Email"
                    placeholder="example@gmail.com"
                    autoCapitalize="none"
                    mode="outlined"
                    keyboardType="email-address"
                    onChangeText={setEmail} />
                <TextInput
                    style={style.input2}
                    label="Password"
                    autoCapitalize="none"
                    mode="outlined"
                    keyboardType="email-address"
                    onChangeText={setPassword} />

                {error && <Text style={{ color: theme.colors.error }}>{error}</Text>}
                <Button style={style.button} mode="contained" onPress={handleAuth}>{isSignUp ? "SignUp" : "SignIn"}</Button>
                <Button mode="text" onPress={handleSwitch}>{isSignUp ? "Already have an account? SignIn" : "Don't have account? SignUp"}</Button>
            </View>
        </KeyboardAvoidingView>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        padding: 16,
        justifyContent: "center",

    },
    title: {
        textAlign: "center",
        marginBottom: 24,
    },
    input1: {
        marginBottom: 24

    },
    input2: {
        marginBottom: 5

    },
    button: {
        textAlign: "center",
        marginTop: 20,
        marginBottom: 24
    }

})