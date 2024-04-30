import { LinearGradient } from 'react-native-linear-gradient';
import IonIcon from 'react-native-vector-icons/Ionicons';
import styled from 'styled-components/native';

import MaskedView from '@react-native-masked-view/masked-view';
import { NativeModules } from 'react-native';
const { StatusBarManager } = NativeModules;

export const Container = styled(LinearGradient)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.BACKGROUND};
  padding: 0 25px;
  gap: 35px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  padding-top: ${StatusBarManager.HEIGHT + 10}px;
`;

export const HeaderContent = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const Avatar = styled.Image`
  height: 40px;
  width: 40px;
  background-color: orange;
  border-radius: 10px;
`;

export const LimitAmount = styled.Text`
  font-size: 20px;
  font-family: ${({ theme }) => theme.font.MEDIUM};
  color: ${({ theme }) => theme.colors.TEXT};
`;

export const LimitAmountLabel = styled.Text`
  font-size: 13px;
  font-family: ${({ theme }) => theme.font.REGULAR};
  color: ${({ theme }) => theme.colors.GRAY};
`;

export const IconButton = styled.TouchableOpacity`
  padding: 5px;
  background-color: ${({ theme }) => theme.colors.BACKGROUND};
  border-radius: 10px;

  shadow-opacity: 0.75;
  shadow-radius: 5px;
  shadow-color: rgba(0, 0, 0, 0.25);
  shadow-offset: 0px 0px;
  elevation: 4;
`;

export const Icon = styled(IonIcon)`
  color: ${({ theme }) => theme.colors.TEXT};
  font-size: 25px;
`;

export const BadgeIconWrapper = styled.View`
  position: absolute;
  border-radius: 9999px;
  padding: 2px;
  z-index: 1;
  right: -8px;
  top: -8px;
  background-color: ${({ theme }) => theme.colors.PRIMARY};
`;

export const BadgeIcon = styled(IonIcon)`
  color: ${({ theme }) => theme.colors.TEXT_WHITE};
  font-size: 15px;
`;

export const Body = styled.View`
  gap: 10px;
  align-items: flex-start;
  flex: 1;
`;

export const Heading = styled.View``;

export const HeadingText = styled.Text`
  font-size: 30px;

  font-family: ${({ theme }) => theme.font.REGULAR};
  color: ${({ theme }) => theme.colors.TEXT};
`;

export const Masked = styled(MaskedView)`
  flex-direction: row;
  height: 50px;
`;

export const TextGradient = styled.Text`
  color: black;
  font-size: 30px;
  font-family: ${({ theme }) => theme.font.SEMIBOLD};
`;

export const GradientWrapper = styled(LinearGradient)`
  flex: 1;
  height: 100%;
`;

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

export const ButtonIcon = styled(IonIcon)`
  color: #fff;
  font-size: 17px;
`;

export const Historic = styled.View`
  margin-top: 30px;
  width: 100%;
  gap: 10px;
`;

export const HistoricTitle = styled.Text`
  font-size: 17px;
  font-family: ${({ theme }) => theme.font.REGULAR};
  color: ${({ theme }) => theme.colors.TEXT};
`;
