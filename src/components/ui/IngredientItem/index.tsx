import * as S from './styles';

type IngredientItemProps = {
  ingredient: string;
  onDelete(): void;
};
export const IngredientItem = ({
  ingredient,
  onDelete,
}: IngredientItemProps) => {
  return (
    <S.Container>
      <S.IngredientTitle>{ingredient}</S.IngredientTitle>
      <S.IngredientIconButton onPress={() => onDelete()}>
        <S.IngredientIcon name="close" />
      </S.IngredientIconButton>
    </S.Container>
  );
};
