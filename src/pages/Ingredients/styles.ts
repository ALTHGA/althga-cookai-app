import MaskedView from '@react-native-masked-view/masked-view';
import { FlatList, TextInput, TextInputProps } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 0 25px;
  gap: 45px;

  background-color: ${({ theme }) => theme.colors.BACKGROUND};
`;

export const Header = styled.View`
  padding-top: ${getStatusBarHeight() + 50}px;
`;

export const Body = styled.View`
  gap: 10px;
  flex: 1;
`;

export const HeadingContainer = styled.View``;

export const Heading = styled.Text`
  font-size: 35px;
  color: ${({ theme }) => theme.colors.TEXT};
  font-family: ${({ theme }) => theme.font.SEMIBOLD};
`;

export const SubHeading = styled.Text`
  font-size: 17px;

  color: ${({ theme }) => theme.colors.GRAY};
  font-family: ${({ theme }) => theme.font.REGULAR};
`;

export const Masked = styled(MaskedView)`
  height: 50px;
`;

export const Wrapper = styled.View`
  background-color: transparent;
`;

export const Gradient = styled(LinearGradient)`
  height: 100%;
`;

export const InputContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 0 15px;
  margin-bottom: 15px;

  background-color: ${({ theme }) => theme.colors.BACKGROUND};

  border: 1px solid ${({ theme }) => theme.colors.PRIMARY};
  border-radius: 10px;
  box-shadow: 0 5px 10px rgba(255, 143, 68, 0.6);
`;

export const Input = styled.TextInput.attrs<TextInputProps>((props) => ({
  placeholderTextColor: props.theme.colors.GRAY,
}))`
  flex: 1;
  font-size: 15px;
  font-family: ${({ theme }) => theme.font.REGULAR};
  color: ${({ theme }) => theme.colors.TEXT};
  height: 50px;
` as typeof TextInput;

export const ButtonIcon = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.PRIMARY};
  height: 35px;
  width: 35px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

export const ListView = styled.FlatList.attrs({
  contentContainerStyle: {
    paddingBottom: getStatusBarHeight() + 100,
  },
  showsVerticalScrollIndicator: false,
})`` as typeof FlatList;

export const Icon = styled(Ionicons)`
  font-size: 20px;
  color: #fff;
`;

export const ButtonPosition = styled.View`
  position: absolute;
  bottom: ${getStatusBarHeight() + 50}px;
  right: 0;
  left: 0;
  align-items: center;
`;
