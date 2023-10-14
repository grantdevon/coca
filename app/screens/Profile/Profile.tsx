import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { signOutUser } from '../../services/auth/Auth'

const Profile = () => {
    
    const signOut = () => {
        signOutUser()
    }

    return (
        <View>
            <TouchableOpacity onPress={signOut}>
                <Text>Sign Out</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({})