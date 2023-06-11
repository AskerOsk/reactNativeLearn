import { StatusBar} from 'expo-status-bar';
import { Text, View, Image } from 'react-native';
import { Post } from './components/Post';
import styled from 'styled-components/native'

const MyStatusBar = styled.View`
  margin-top: 50px;
`;

export default function App() {
  return (
    <View>
      <MyStatusBar />
      <StatusBar theme="auto"/>
        <Post 
          title='Test Работы' 
          imageUrl="https://s1.1zoom.ru/b5050/243/Big_cats_Leopards_Snout_479812_1920x1200.jpg" 
          createAt='11.06.2023 17:53'/>
    </View>
  );
}
