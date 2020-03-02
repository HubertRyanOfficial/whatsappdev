import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';

export default function ChatsMessage({ item }){
    return (
        <TouchableOpacity style={styles.container}>
            <Image source={item.image} style={styles.profile}/>

            <View style={styles.allConfig}>
                <View style={styles.info}>
                    <Text style={styles.username}>{item.username}</Text>
                    <Text style={styles.message}>{item.lastMessage}</Text>
                </View>

                <View style={styles.date}>
                    <Text style={styles.dateText}>{item.hour}</Text>
                    {
                        item.newMessages ? <View style={styles.newMessage}><Text style={styles.newMessageText}>2</Text></View> : null
                    }
                </View>
            </View>
        </TouchableOpacity>
    );
}
