import {
  FadeIn,
  FadeOut,
  ZoomInEasyUp,
  ZoomOutEasyUp,
} from 'react-native-reanimated';
import * as S from './styles';

type CheckboxProps = {
  value: boolean;
  onValueChange(): void;
};
export const Checkbox = ({ value, onValueChange }: CheckboxProps) => {
  return (
    <S.Container onPress={onValueChange}>
      <S.CheckboxBorder entering={FadeIn} exiting={FadeOut} checked={value}>
        {value && (
          <S.CheckIcon
            entering={ZoomInEasyUp}
            exiting={ZoomOutEasyUp}
            checked={value}
            name="checkmark-sharp"
          />
        )}
      </S.CheckboxBorder>
    </S.Container>
  );
};
