import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styled from 'styled-components/native';

export const Button = styled.TouchableOpacity`
  background-color: white;
  box-shadow: 0 2px 35px rgba(151, 71, 255, 0.5);
  border-radius: 5px;
`;

export const ButtonGradientWrapper = styled(LinearGradient)`
  flex-direction: row;
  border-radius: 5px;
  align-items: center;
  padding: 10px 25px;
  gap: 15px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-family: ${({ theme }) => theme.font.MEDIUM};
  font-size: 17px;
`;

export const StarIcon = styled(Ionicons)`
  font-size: 17px;
  color: ${({ theme }) => theme.colors.BACKGROUND};
`;
