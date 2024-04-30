import React from 'react';

import { useNavigation } from '@react-navigation/native';
import { StatusBar, TouchableOpacity, View } from 'react-native';
import { useTheme } from 'styled-components/native';
import { RecipeItem } from '~/components/ui/RecipeItem';
import { StackProps } from '~/route/models/StackParams';
import * as S from './styles';

export function Home() {
  const navigation = useNavigation<StackProps>();
  const theme = useTheme();
  return (
    <S.Container
      colors={['rgba(179, 121, 255, 0.20)', theme.colors.BACKGROUND]}
      locations={[0.2, 0.4]}
      useAngle={true}
      angle={160}
    >
      <StatusBar barStyle="dark-content" />
      <S.Header>
        <S.HeaderContent>
          <TouchableOpacity>
            <S.Avatar
              source={{
                uri: 'https://api.dicebear.com/8.x/miniavs/png?seed=Bella',
              }}
            />
          </TouchableOpacity>
          <S.LimitAmount>
            32.000 <S.LimitAmountLabel>/limits</S.LimitAmountLabel>
          </S.LimitAmount>
        </S.HeaderContent>
        <S.IconButton onPress={() => navigation.navigate('Limits')}>
          <S.BadgeIconWrapper>
            <S.BadgeIcon name="add" />
          </S.BadgeIconWrapper>
          <S.Icon name="speedometer" />
        </S.IconButton>
      </S.Header>

      <S.Body>
        <S.Heading>
          <S.HeadingText>
            Encontre receitas com base no que você já tem em casa
          </S.HeadingText>

          <S.Masked
            maskElement={
              <View style={{ backgroundColor: 'transparent', flex: 1 }}>
                <S.TextGradient>em segundos</S.TextGradient>
              </View>
            }
          >
            <S.GradientWrapper
              useAngle
              angle={90}
              colors={['#FF812D', '#9747FF']}
            />
          </S.Masked>
        </S.Heading>

        <S.Button onPress={() => navigation.navigate('Ingredients')}>
          <S.ButtonGradientWrapper
            useAngle
            angle={90}
            colors={['#FF812D', '#9747FF']}
          >
            <S.ButtonText>Gerar receita</S.ButtonText>
            <S.ButtonIcon name="star" />
          </S.ButtonGradientWrapper>
        </S.Button>

        <S.Historic>
          <S.HistoricTitle>Seu histórico de receitas</S.HistoricTitle>
          <RecipeItem />
          <RecipeItem />
          <RecipeItem />
          <RecipeItem />
          <RecipeItem />
        </S.Historic>
      </S.Body>
    </S.Container>
  );
}
