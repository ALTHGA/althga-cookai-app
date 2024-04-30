import LinearGradient from 'react-native-linear-gradient';
import Animated from 'react-native-reanimated';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import styled from 'styled-components/native';

const LinearGradientBar = Animated.createAnimatedComponent(LinearGradient);

export const Container = styled(Animated.View)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.BACKDROP};
`;

export const Content = styled(Animated.View)`
  padding: 25px;
  padding-bottom: ${getStatusBarHeight() + 100}px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.BACKGROUND};

  align-items: center;
  justify-content: center;
`;

export const Heading = styled.Text`
  font-size: 45px;
  font-family: ${({ theme }) => theme.font.SEMIBOLD};
  color: ${({ theme }) => theme.colors.TEXT};
  text-align: center;
`;

export const ProgressBar = styled.View`
  background-color: #f4f4f5;
  border-radius: 10px;
  overflow: hidden;
  width: 90%;
  margin-top: 20px;
`;
export const Bar = styled(LinearGradientBar)`
  height: 5px;
  width: 100%;
  border-radius: 10px;
`;
