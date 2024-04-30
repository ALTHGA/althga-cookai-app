import { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import {
  Easing,
  FadeIn,
  FadeOut,
  ReduceMotion,
  SlideInDown,
  SlideInRight,
  SlideOutRight,
  runOnJS,
} from 'react-native-reanimated';
import * as S from './style';

type SuccessfulProps = {
  onDismiss: () => void;
};
export function Successful({ onDismiss }: SuccessfulProps) {
  const [isLoading, setIsLoading] = useState(false);

  const callbackDismiss = () => {
    onDismiss();
  };

  useEffect(() => {
    setTimeout(() => {
      callbackDismiss();
    }, 5000);
  }, []);

  return (
    !isLoading && (
      <S.Container entering={FadeIn} exiting={FadeOut}>
        <StatusBar barStyle={'light-content'} />
        <S.Content
          exiting={SlideOutRight.easing(Easing.linear).withCallback(() => {
            'worklet';

            runOnJS(onDismiss)();
          })}
          entering={SlideInRight.duration(800)
            .easing(Easing.in(Easing.bezierFn(0.25, 0.1, 0.25, 1)))
            .reduceMotion(ReduceMotion.System)}
        >
          <S.IconContainer entering={FadeIn.duration(800)}>
            <S.Icon
              entering={SlideInDown.duration(1000).easing(
                Easing.in(Easing.bezierFn(0.25, 0.1, 0.25, 1)),
              )}
              name={'checkmark'}
            />
          </S.IconContainer>
          <S.Heading>Pagamento realizado com sucesso!</S.Heading>
        </S.Content>
      </S.Container>
    )
  );
}
