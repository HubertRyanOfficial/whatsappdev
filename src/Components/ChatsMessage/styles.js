import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 12,
        flexDirection: 'row',
        alignItems: 'center',
    },
    allConfig: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        flex: 1,
    },
    profile: {
        width: 60,
        height: 60,
        borderRadius: 30,
    },
    info: {
        marginLeft: 20,
    },
    username: {
        fontSize: 18,

    },
    message: {
        color: '#6d6d6d'
    },
    date: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    dateText: {
        color: '#6d6d6d'
    },
    newMessage: {
        backgroundColor: '#2ED56C',
        width: 22,
        height: 22,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
    },
    newMessageText: {
        color: '#fff'
    }
})