import { useState } from 'react';
import {
  Easing,
  FadeIn,
  FadeOut,
  ReduceMotion,
  SlideInLeft,
  SlideInRight,
  SlideOutRight,
  runOnJS,
} from 'react-native-reanimated';
import * as S from './style';

type GeneratingProps = {
  onDismiss: () => void;
};
export function Generating({ onDismiss }: GeneratingProps) {
  const [isLoading, setIsLoading] = useState(false);

  const callbackDismiss = () => {
    'worklet';
    runOnJS(setIsLoading)(true);
  };

  return (
    !isLoading && (
      <S.Container entering={FadeIn} exiting={FadeOut}>
        <S.Content
          exiting={SlideOutRight.easing(Easing.linear).withCallback(() => {
            'worklet';

            runOnJS(onDismiss)();
          })}
          entering={SlideInRight.duration(800)
            .easing(Easing.in(Easing.bezierFn(0.25, 0.1, 0.25, 1)))
            .reduceMotion(ReduceMotion.System)}
        >
          <S.Heading>Gerando sua receita</S.Heading>
          <S.ProgressBar>
            <S.Bar
              entering={SlideInLeft.duration(5000)
                .easing(Easing.in(Easing.bezierFn(0.25, 0.1, 0.25, 1)))
                .reduceMotion(ReduceMotion.System)
                .withCallback(callbackDismiss)}
              useAngle
              angle={90}
              colors={['#FF8F44', '#9747FF', '#FF812D']}
            />
          </S.ProgressBar>
        </S.Content>
      </S.Container>
    )
  );
}
