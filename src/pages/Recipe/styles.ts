import { BlurView } from '@react-native-community/blur';
import { ScrollViewProps } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import styled from 'styled-components/native';

export const Container = styled(LinearGradient)`
  flex: 1;
`;

export const Header = styled(BlurView)`
  padding: ${getStatusBarHeight() + 50}px 25px 25px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const Body = styled.ScrollView.attrs<ScrollViewProps>({
  contentContainerStyle: {
    gap: 10,
    paddingBottom: getStatusBarHeight() + 50,
  },
  showsVerticalScrollIndicator: false,
})``;

export const RecipeDetails = styled.View`
  padding: 10px 25px;

  gap: 15px;
`;

export const Heading = styled.Text`
  font-size: 25px;
  font-family: ${({ theme }) => theme.font.SEMIBOLD};
  color: ${({ theme }) => theme.colors.TEXT};
`;

export const RecipeIngredients = styled.View`
  gap: 10px;
  align-items: start;
`;

export const Highlight = styled.Text`
  background-color: rgba(255, 143, 68, 0.15);
  padding: 0 5px;

  text-transform: uppercase;
  font-family: ${({ theme }) => theme.font.BOLD};
  color: ${({ theme }) => theme.colors.TEXT};
  font-size: 15px;
`;

export const RecipeIngredientText = styled.Text`
  font-family: ${({ theme }) => theme.font.REGULAR};
  color: ${({ theme }) => theme.colors.TEXT};

  font-size: 15px;
`;
