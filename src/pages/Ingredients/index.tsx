import { useNavigation } from '@react-navigation/native';
import { useEffect, useRef, useState } from 'react';
import { Modal, TextInputProps } from 'react-native';
import { useTheme } from 'styled-components/native';
import { Generating } from '~/components/Generating';
import { ButtonGradient } from '~/components/ui/ButtonGradient';
import { IconButton } from '~/components/ui/IconButton';
import { IngredientItem } from '~/components/ui/IngredientItem';
import { StackProps } from '~/route/models/StackParams';
import * as S from './styles';

const ingredientsPlaceholder = [
  'Arroz',
  'Frango',
  'Feijão',
  'Ketchup',
  'Achocolatado',
  'Ovos',
  'Farinha de Trigo',
];

export function Ingredients() {
  let timer: any = null;

  const navigation = useNavigation<StackProps>();
  const theme = useTheme();

  const inputRef = useRef<TextInputProps>(null);
  const [loading, setLoading] = useState(false);

  const [ingredientList, setIngredientList] = useState<string[]>([]);
  const [ingredientValue, setIngredientValue] = useState('');
  const [ingredientPlaceholder, setIngredientPlaceholder] = useState('');
  const [ingredientIndex, setIngredientIndex] = useState(0);
  const [ingradientRandom, setIngredientRandom] = useState(
    ingredientsPlaceholder[
      Math.floor(Math.random() * ingredientsPlaceholder.length)
    ],
  );

  const handleAddIngredient = () => {
    if (ingredientValue.length === 0) return;
    setIngredientList((old) => [ingredientValue, ...old]);
    setIngredientValue('');
  };

  const handleRemoveIngredient = (index: number) => {
    setIngredientList(ingredientList.filter((ingredient, i) => i != index));
  };

  const handleProgressFilled = () => {
    setLoading(false);
    navigation.replace('Recipe');
  };

  const typeWritter = () => {
    timer = setTimeout(() => {
      if (ingredientIndex < ingradientRandom.length) {
        setIngredientIndex((old) => old + 1);

        let char = ingradientRandom[ingredientIndex];
        setIngredientPlaceholder((old) => old + char);
        return;
      }

      setIngredientRandom(
        ingredientsPlaceholder[
          Math.floor(Math.random() * ingredientsPlaceholder.length)
        ],
      );
      setIngredientIndex(0);
      setIngredientPlaceholder('');
    }, 200);
  };

  const clearTypewritter = () => {
    setIngredientIndex(0);
    setIngredientPlaceholder('');

    clearTimeout(timer);
    timer = null;
  };

  const placeholderTypewritter = () => {
    if (ingredientValue.length > 0) return clearTypewritter();
    if (ingredientValue.length <= 0) return typeWritter();

    return () => {
      clearTimeout(timer);
    };
  };

  useEffect(() => {
    placeholderTypewritter();
  }, [ingredientPlaceholder, ingredientValue]);

  return (
    <S.Container>
      <Modal visible={loading} transparent>
        <Generating onDismiss={handleProgressFilled} />
      </Modal>

      <S.Header>
        <IconButton onPress={() => navigation.goBack()} icon="arrow-back" />
      </S.Header>

      <S.Body>
        <S.HeadingContainer>
          <S.Heading>O que há na sua</S.Heading>
          <S.Masked
            maskElement={
              <S.Wrapper>
                <S.Heading>cozinha?</S.Heading>
              </S.Wrapper>
            }
          >
            <S.Gradient
              useAngle
              angle={90}
              locations={[0.01, 0.5]}
              colors={[theme.colors.PRIMARY, theme.colors.PRIMARY_VARIANT]}
            />
          </S.Masked>
        </S.HeadingContainer>
        <S.SubHeading>Insira pelo menos 2 ingredientes</S.SubHeading>

        <S.InputContainer>
          <S.Input
            value={ingredientValue}
            onChangeText={setIngredientValue}
            placeholder={ingredientPlaceholder}
            onSubmitEditing={handleAddIngredient}
            blurOnSubmit={true}
          />
          <S.ButtonIcon onPress={handleAddIngredient}>
            <S.Icon name="add" />
          </S.ButtonIcon>
        </S.InputContainer>

        <S.ListView
          data={ingredientList}
          keyboardDismissMode="on-drag"
          keyExtractor={(item, index) => `${index}`}
          renderItem={({ item, index }) => (
            <IngredientItem
              onDelete={() => handleRemoveIngredient(index)}
              ingredient={item}
            />
          )}
        />
      </S.Body>

      <S.ButtonPosition>
        <ButtonGradient onPress={() => setLoading(true)} />
      </S.ButtonPosition>
    </S.Container>
  );
}
