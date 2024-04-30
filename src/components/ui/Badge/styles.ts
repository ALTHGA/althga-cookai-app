import styled from 'styled-components/native';

export const Badge = styled.View``;
export const BadgeNumber = styled.Text`
  background-color: red;
  padding: 5px;
  position: absolute;
  z-index: 1;

  right: -2px;
  border-radius: 999px;
  font-size: 10px;

  color: ${({ theme }) => theme.colors.TEXT_WHITE};
  font-family: ${({ theme }) => theme.font.MEDIUM};
`;
