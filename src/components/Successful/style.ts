import Animated from 'react-native-reanimated';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styled from 'styled-components/native';

const IoniconAnimted = Animated.createAnimatedComponent(Ionicons);

export const Container = styled(Animated.View)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.BACKDROP};
`;

export const Content = styled(Animated.View)`
  padding: 25px;
  padding-bottom: ${getStatusBarHeight() + 100}px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.PRIMARY};

  align-items: center;
  justify-content: center;
`;

export const Heading = styled.Text`
  font-size: 25px;
  font-family: ${({ theme }) => theme.font.SEMIBOLD};
  color: ${({ theme }) => theme.colors.TEXT_WHITE};
  text-align: center;
  margin-top: 25px;
`;

export const IconContainer = styled(Animated.View)`
  background-color: ${({ theme }) => theme.colors.PRIMARY_VARIANT};
  padding: 10px;
  border-radius: 9999px;
  overflow: hidden;
`;

export const Icon = styled(IoniconAnimted)`
  font-size: 100px;
  color: ${({ theme }) => theme.colors.TEXT_WHITE};
`;
