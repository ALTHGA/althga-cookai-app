import { TouchableOpacityProps } from 'react-native';
import * as S from './styles';

type IconButtonProps = {
  variants?: string;
  icon: string;
} & TouchableOpacityProps;
export const IconButton = ({ icon, ...rest }: IconButtonProps) => {
  return (
    <S.Container {...rest}>
      <S.Icon name={icon} />
    </S.Container>
  );
};
