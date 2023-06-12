import styled from 'styled-components/native'

const PostView = styled.View`
  flex-direction: row;
  padding: 15px;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0,0,0,0.1);
  border-bottom-style: solid;
`;


const PostImage = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 12px;
  margin-right : 12px;
`;
const PostTitle = styled.Text`
  font-size: 16px;
  font-weight: 700;
`;
const PostData = styled.Text`
  font-size: 12px;
  color: rgba(0,0,0,0.4);
  margin-top: 2px;
`;
const PostDetails = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Post = ({title, imageUrl, createAt}) =>{
    return (
        <PostView>
            <PostImage source={{ uri: imageUrl}}/>
            <PostDetails>
                <PostTitle>{title}</PostTitle>
                <PostData>{createAt}</PostData>
            </PostDetails>
        </PostView>
    )
}