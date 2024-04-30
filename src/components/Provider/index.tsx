import React from 'react';

import { ThemeProvider } from 'styled-components/native';
import * as S from './styles';

import { StatusBar } from 'react-native';
import { theme } from '~/global/theme';

type PrivderProps = {
  children: React.ReactNode;
};

export function Provider({ children }: PrivderProps) {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar backgroundColor="transparent" translucent />
      <S.SafeArea>{children}</S.SafeArea>
    </ThemeProvider>
  );
}
