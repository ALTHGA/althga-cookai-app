import * as S from './styles';

type RecipeItemProps = {};
export const RecipeItem = () => {
  return (
    <S.Container>
      <S.RecipeIcon>
        <S.RecipeEmoji>🥑</S.RecipeEmoji>
      </S.RecipeIcon>
      <S.RecipeTitle>Quesadilha de Frango</S.RecipeTitle>
      <S.IconButton>
        <S.Icon name="arrow-forward" />
      </S.IconButton>
    </S.Container>
  );
};
