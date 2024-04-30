import { TouchableOpacityProps } from 'react-native';
import * as S from './styles';

type ButtonGradientProps = {
  title?: string;
  icon?: string | null;
} & TouchableOpacityProps;

export const ButtonGradient = ({
  title = 'Gerar receita',
  icon = 'star',
  ...rest
}: ButtonGradientProps) => {
  return (
    <S.Button {...rest}>
      <S.ButtonGradientWrapper
        useAngle
        angle={90}
        colors={['#FF812D', '#9747FF']}
      >
        <S.ButtonText>{title}</S.ButtonText>
        {icon && <S.StarIcon name={icon} />}
      </S.ButtonGradientWrapper>
    </S.Button>
  );
};
