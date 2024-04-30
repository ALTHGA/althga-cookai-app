import { useState } from 'react';
import { Checkbox } from '../Checkbox';
import * as S from './styles';

export const RecipePreparationItem = () => {
  const [checked, setChecked] = useState(false);
  return (
    <S.RecipePreparationItem onPress={() => setChecked(!checked)}>
      <Checkbox value={checked} onValueChange={() => setChecked(!checked)} />
      <S.RecipePrepartionText checked={checked}>
        Pressione levemente com uma espátula e deixe cozinhar por cerca de 2-3
      </S.RecipePrepartionText>
    </S.RecipePreparationItem>
  );
};
