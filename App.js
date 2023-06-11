import axios from 'axios';

import { StatusBar} from 'expo-status-bar';
import { Text, View, Image, Alert } from 'react-native';
import { Post } from './components/Post';
import styled from 'styled-components/native'
import React from 'react';

const MyStatusBar = styled.View`
  margin-top: 50px;
`;

export default function App() {

  const [char, setChar] = React.useState();

  React.useEffect(() =>{
    
    axios
      .get('https://gateway.marvel.com:443/v1/public/characters?limit=10&apikey=6abcc4a90c6bc6f858994773e26ac8eb')
      .then(({data}) =>{
        setChar(data)
        Alert.alert("Ответ", 'Получил данные!!')

      })
      .catch(err =>{
        console.log(err);
        Alert.alert('Ошибка при получении данных!')
      });
  }, [])

  return (
    <View>
      <MyStatusBar />
      <StatusBar theme="auto"/>
        {
        char.map(obj =>{ 
            <Post 
            title='Test Работы' 
            imageUrl="https://s1.1zoom.ru/b5050/243/Big_cats_Leopards_Snout_479812_1920x1200.jpg" 
            createAt='11.06.2023 17:53'/>
         })
        }
    </View>
  );
}
