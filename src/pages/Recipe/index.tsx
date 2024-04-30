import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { useTheme } from 'styled-components';
import { ButtonGradient } from '~/components/ui/ButtonGradient';
import { IconButton } from '~/components/ui/IconButton';
import { RecipePreparationItem } from '~/components/ui/RecipePreparationItem';
import * as S from './styles';

export function Recipe() {
  const navigation = useNavigation();
  const theme = useTheme();
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsTransitioning(true);
    }, 1000);
  }, []);

  return (
    <S.Container
      colors={['rgba(179, 121, 255, 0.01)', theme.colors.BACKGROUND]}
      locations={[0.1, 0.4]}
      useAngle={true}
      angle={160}
    >
      <S.Body stickyHeaderIndices={[0]}>
        <S.Header
          style={{
            position: 'absolute',
          }}
          blurType="light"
          blurAmount={20}
          reducedTransparencyFallbackColor="white"
        >
          <IconButton onPress={() => navigation.goBack()} icon="arrow-back" />
          <ButtonGradient title="Salvar" />
        </S.Header>

        <S.RecipeDetails>
          <S.Heading>Quesadilha de Frango</S.Heading>
          <S.RecipeIngredients>
            <S.Highlight>Ingredientes</S.Highlight>
            <S.RecipeIngredientText>
              • 1 peito de frango desossado e sem pele, cozido e desfiado
            </S.RecipeIngredientText>
            <S.RecipeIngredientText>• 2 massas rap10</S.RecipeIngredientText>
            <S.RecipeIngredientText>• 3 Sal a gosto</S.RecipeIngredientText>
            <S.RecipeIngredientText>
              • 1 xícara de queijo ralado (pode ser cheddar, muçarela, ou outro
              de sua preferência)
            </S.RecipeIngredientText>
          </S.RecipeIngredients>

          <S.RecipeIngredients>
            <S.Highlight>Preparação</S.Highlight>
            <RecipePreparationItem />
            <RecipePreparationItem />
            <RecipePreparationItem />
            <RecipePreparationItem />
            <RecipePreparationItem />
            <RecipePreparationItem />
            <RecipePreparationItem />
            <RecipePreparationItem />
          </S.RecipeIngredients>
        </S.RecipeDetails>
      </S.Body>
    </S.Container>
  );
}
