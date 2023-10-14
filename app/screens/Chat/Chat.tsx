import { StyleSheet, View } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { GiftedChat, IMessage } from 'react-native-gifted-chat'
import { IChatProps } from './ChatInterface'
import firestore from '@react-native-firebase/firestore'
import ChatHeader from '../../components/ChatHeader/ChatHeader'

const Chat = ({navigation}) => {
  const [messages, setMessages] = useState<IChatProps[]>([])

  useEffect(() => {
    const chatRef = firestore()
      .collection('Chat')
      .doc('grantheartrobyn')
      .collection('messages')
      .orderBy('createdAt', 'desc'); // Sort by createdAt in ascending order

    const unsubscribe = chatRef.onSnapshot((querySnapshot) => {
      const newMessages: IMessage[] = [];
      querySnapshot.forEach((doc) => {
        const message = doc.data() as IMessage;
        // Check if 'createdAt' is a Firebase Timestamp and convert it if needed
        if (message.createdAt instanceof firestore.Timestamp) {
          message.createdAt = message.createdAt.toDate();
        }
        newMessages.push(message);
      });
      setMessages(newMessages);
    });

    return () => {
      unsubscribe(); // Unsubscribe when the component unmounts.
    };
  }, []);

  const onSend = useCallback((messages = []) => {
    const userMessage = {
      ...messages[0],
      sentBy: 'grant',
      sentTo: 'robyn',
      createdAt: new Date(),
    };

    // const chatid = uid > user.uid ? user.uid+ "-" +uid : uid+ "-" +user.uid
    const chatid = 'grantheartrobyn';

    firestore()
      .collection('Chat')
      .doc(chatid)
      .collection('messages')
      .add({ ...userMessage });

    // No need to set messages here; it will be updated through the snapshot listener.
  }, []);

  return (
    <View style={styles.container}>
      <ChatHeader partnerName='Robyn' navigation={navigation}/>
      <GiftedChat
        messages={messages}
        onSend={(messages: IMessage[]) => onSend(messages)}
        user={{
          _id: 'grant'
        }}
      />
    </View>

  )
}

export default Chat

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})