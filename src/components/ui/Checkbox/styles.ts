import Animated from 'react-native-reanimated';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styled, { css } from 'styled-components/native';

const AnimatedIcon = Animated.createAnimatedComponent(Ionicons);

type CheckboxProps = {
  checked: boolean;
};

export const Container = styled.TouchableOpacity`
  padding: 5px;
`;
export const CheckboxBorder = styled(Animated.View)<CheckboxProps>`
  height: 20px;
  width: 20px;
  border: 2px solid ${({ theme }) => theme.colors.TEXT};
  border-radius: 5px;

  align-items: center;
  justify-content: center;

  ${(props) =>
    props.checked &&
    css`
      border: 2px solid ${({ theme }) => theme.colors.PRIMARY};
      background-color: ${({ theme }) => theme.colors.PRIMARY};
    `}
`;
export const CheckIcon = styled(AnimatedIcon)<CheckboxProps>`
  font-size: 15px;
  color: ${({ theme, checked }) =>
    checked ? theme.colors.TEXT_WHITE : theme.colors.TEXT};
`;
