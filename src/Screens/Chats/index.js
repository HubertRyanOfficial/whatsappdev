import React, { useEffect, useState } from 'react';
import { View, FlatList} from 'react-native';
import { styles } from './styles';

import ChatsMessage from '../../Components/ChatsMessage';

const chats = [
  {
    username: 'Grupo de Hubert',
    image: require('../../Images/group.jpg'),
    lastMessage: 'Hubert: Deixe o like neste vídeo.',
    newMessages: true,
    id: 0,
    hour: '11:30'
  },
  {
    username: 'Hubert',
    image: require('../../Images/1.jpg'),
    lastMessage: 'Você: Você está recriando o whatsapp?',
    newMessages: false,
    id: 1,
    hour: '11:20'
  },
  {
    username: 'Mãe',
    image: require('../../Images/3.jpg'),
    lastMessage: 'Está na onde?',
    newMessages: false,
    id: 2,
    hour: '9:17'
  },
  {
    username: 'Irmão',
    image: require('../../Images/5.jpg'),
    lastMessage: 'Você: Iai gostou do meu ultimo vídeo?',
    newMessages: false,
    id: 3,
    hour: '01:00'
  },
  {
    username: 'Mozão',
    image: require('../../Images/4.jpg'),
    lastMessage: 'Você: Bom dia!!!!!',
    newMessages: false,
    id: 4,
    hour: '00:18'
  },
  {
    username: 'Grupo de desenvolvedores',
    image: require('../../Images/group2.jpg'),
    lastMessage: 'Guanabara: Iaew galeraaah.',
    newMessages: false,
    id: 5,
    hour: '00:00'
  },
]

export default function Chats(){

    const [listChat, setListChat] = useState([]);

    useEffect(() => {
        getChat();
    }, [])

    function getChat() {
        setListChat(chats);
    }

    return (

      <FlatList
        data={listChat}
        renderItem={({ item }) => <ChatsMessage item={item} />}
        keyExtractor={item => String(item.id)}
        ItemSeparatorComponent={() => (<View style={{height: 1, backgroundColor: '#eee'}} />)}
      />
    );
}
