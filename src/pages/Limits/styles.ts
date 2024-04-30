import { getStatusBarHeight } from 'react-native-status-bar-height';
import styled from 'styled-components/native';

export const Container = styled.View`
  padding: ${getStatusBarHeight() + 50}px 25px 25px;
  flex: 1;
  background-color: ${({ theme }) => theme.colors.BACKGROUND};
`;

export const Body = styled.View`
  flex: 2;
  justify-content: center;
  align-items: center;

  gap: 25px;
`;

export const Emoji = styled.Text`
  font-size: 50px;
`;

export const Heading = styled.Text`
  font-size: 30px;
  text-align: center;

  font-family: ${({ theme }) => theme.font.MEDIUM};
  color: ${({ theme }) => theme.colors.TEXT};
`;

export const HeadingMedium = styled.Text`
  font-size: 17px;
  text-align: center;

  font-family: ${({ theme }) => theme.font.REGULAR};
  color: ${({ theme }) => theme.colors.GRAY};
`;

export const LimitAmount = styled.Text`
  font-size: 50px;
  text-align: center;

  font-family: ${({ theme }) => theme.font.MEDIUM};
  color: ${({ theme }) => theme.colors.TEXT};
`;

export const LimitAmountDescription = styled.Text`
  font-size: 17px;
  font-family: ${({ theme }) => theme.font.REGULAR};
  color: ${({ theme }) => theme.colors.TEXT};
  line-height: 8px;
`;

export const LimitDescription = styled.Text`
  font-size: 17px;
  font-family: ${({ theme }) => theme.font.REGULAR};
  color: ${({ theme }) => theme.colors.TEXT};
  text-align: center;
`;

export const LimitActions = styled.View`
  flex-direction: row;
  gap: 10px;
`;
export const LimitIncrementButton = styled.TouchableOpacity``;
export const LimitIncrementText = styled.Text`
  font-size: 17px;
  font-family: ${({ theme }) => theme.font.MEDIUM};
  color: ${({ theme }) => theme.colors.PRIMARY};
  text-decoration-line: underline;
`;

export const LimitDecrementText = styled.Text`
  font-size: 15px;

  font-family: ${({ theme }) => theme.font.REGULAR};
  color: ${({ theme }) => theme.colors.ERROR};
`;

export const LimitDiscount = styled.Text`
  font-size: 13px;

  font-family: ${({ theme }) => theme.font.MEDIUM};
  color: ${({ theme }) => theme.colors.PRIMARY};
`;
