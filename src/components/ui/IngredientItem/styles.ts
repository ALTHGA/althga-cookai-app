import Ionicons from 'react-native-vector-icons/Ionicons';
import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.SURFACE};
  width: 100%;
  padding: 15px 15px;
  border-radius: 8px;
  margin-bottom: 8px;

  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const IngredientTitle = styled.Text`
  font-size: 15px;
  font-family: ${({ theme }) => theme.font.REGULAR};
  color: ${({ theme }) => theme.colors.TEXT};
  flex: 1;

  text-transform: capitalize;
`;

export const IngredientIconButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.PRIMARY};
  padding: 5px;
  border-radius: 9999px;
`;

export const IngredientIcon = styled(Ionicons)`
  font-size: 17px;
  color: white;
`;
