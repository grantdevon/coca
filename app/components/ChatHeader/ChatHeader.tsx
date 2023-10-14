import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { FC } from 'react'

interface IChatHeaderProps {
    partnerName: string
    navigation: any
}

const ChatHeader: FC<IChatHeaderProps> = ({
    partnerName,
    navigation
}) => {
    return (
        <View style={styles.container}>
            <View style={styles.mainContent}>
                <Text>image url</Text>
                <Text>{partnerName}</Text>
            </View>

            <TouchableOpacity onPress={() => navigation.navigate('profile')}>
                <Text>Nav to Profile</Text>
            </TouchableOpacity>

        </View>
    )
}

export default ChatHeader

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10
    },
    mainContent: {
        flexDirection: 'row'
    }
})