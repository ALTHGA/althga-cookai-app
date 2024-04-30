import Ionicons from 'react-native-vector-icons/Ionicons';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.BACKGROUND};
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);

  height: 45px;
  width: 45px;
  border-radius: 8px;

  align-items: center;
  justify-content: center;
`;
export const Icon = styled(Ionicons)`
  font-size: 25px;
  color: ${({ theme }) => theme.colors.TEXT};
`;
