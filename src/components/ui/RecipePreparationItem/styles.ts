import styled, { css } from 'styled-components/native';

export const RecipePreparationItem = styled.TouchableOpacity`
  flex-direction: row;
  align-items: start;
  padding: 10px;
  gap: 10px;
  background-color: ${({ theme }) => theme.colors.SURFACE};
  border-radius: 5px;
  width: 100%;
`;

export const RecipePrepartionText = styled.Text<{ checked: boolean }>`
  font-family: ${({ theme }) => theme.font.REGULAR};
  color: ${({ theme }) => theme.colors.TEXT};

  ${({ checked }) =>
    checked &&
    css`
      text-decoration: line-through;
      color: gray;
    `}

  font-size: 14px;
  flex: 1;
`;
