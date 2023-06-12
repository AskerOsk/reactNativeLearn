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

  const [char, setChar] = React.useState([]);

  React.useEffect(() =>{
    
    axios.get('https://6486b810beba6297278f129a.mockapi.io/posts')  //// https://jsonplaceholder.typicode.com/posts
      .then(({ data }) =>{
        setChar(data);
        // Alert.alert("Ответ", 'Получил данные!!')
        console.log(char);

      })
      .catch(err =>{
        console.log(err);
        Alert.alert('Ошибка при получении данных!')
      });
  }, [])


  return (
    <View>
      <MyStatusBar />
      {char.map((obj) =>{
         return <Post key={obj.id} title={obj.name} imageUrl={obj.avatar} createAt={obj.createdAt}/>
      })}
      <StatusBar theme="auto"/>
      <Text>Работает</Text>
    </View>
  );
}
