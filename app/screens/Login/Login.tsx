import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { loginUser } from '../../services/auth/Auth'

const Login = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const login = () => {
        loginUser(email, password)
    }

    return (
        <View style={styles.container}>
            <Text>Login</Text>
            <TextInput
                placeholder='email'
                onChangeText={email => setEmail(email)}
                value={email}
            />

            <TextInput
                placeholder='password'
                onChangeText={password => setPassword(password)}
                value={password}
                secureTextEntry
            />

            <TouchableOpacity onPress={login}>
                <Text>Login</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})