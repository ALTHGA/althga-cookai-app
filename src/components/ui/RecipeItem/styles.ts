import Ionicons from 'react-native-vector-icons/Ionicons';
import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.SURFACE};
  width: 100%;
  padding: 10px 15px;
  border-radius: 8px;

  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const RecipeIcon = styled.View`
  padding: 8px;
  background-color: ${({ theme }) => theme.colors.PRIMARY};
  border-radius: 999px;
`;

export const RecipeEmoji = styled.Text`
  font-size: 17px;
`;

export const RecipeTitle = styled.Text`
  font-size: 15px;
  font-family: ${({ theme }) => theme.font.REGULAR};
  color: ${({ theme }) => theme.colors.TEXT};
  flex: 1;
`;

export const IconButton = styled.TouchableOpacity`
  padding: 8px;
`;

export const Icon = styled(Ionicons)`
  font-size: 20px;
`;
