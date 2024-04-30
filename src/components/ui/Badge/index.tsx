import { ReactNode } from 'react';
import * as S from './styles';

type BadgeProps = {
  number?: number;
  children: ReactNode;
};
export const Badge = ({ number, children }: BadgeProps) => {
  return (
    <S.Badge>
      <S.BadgeNumber>{number || ''}</S.BadgeNumber>
      {children}
    </S.Badge>
  );
};
