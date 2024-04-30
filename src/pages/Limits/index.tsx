import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { Modal } from 'react-native';
import { Successful } from '~/components/Successful';
import { ButtonGradient } from '~/components/ui/ButtonGradient';
import { IconButton } from '~/components/ui/IconButton';
import { StackProps } from '~/route/models/StackParams';
import * as S from './styles';

const MINIMUM_VALUE_FOR_DISCOUNT = 20;
const VALUE_PER_LIMITS = 10;

export function Limits() {
  const navigation = useNavigation<StackProps>();

  const [successful, setSuccessful] = useState(false);

  const [limitAmount, setLimitAmount] = useState(10000);
  const [amount, setAmount] = useState(
    (VALUE_PER_LIMITS * limitAmount) / limitAmount,
  );
  const discount = amount >= MINIMUM_VALUE_FOR_DISCOUNT ? 10 : null;

  function calculateDiscount(value: number) {
    if (value >= MINIMUM_VALUE_FOR_DISCOUNT) {
      const discounted = value * 0.1;
      return value - discounted;
    } else return value;
  }

  const handleIncrementLimitAmount = () => {
    const updatedLimitAmount = limitAmount + 5000;
    let updatedAmount = amount + (10 / updatedLimitAmount) * updatedLimitAmount;
    setLimitAmount(updatedLimitAmount);
    setAmount(updatedAmount);
  };

  const handleDismissSuccessful = () => {
    setSuccessful(false);
    navigation.reset({
      index: 0,
      routes: [{ name: 'Home' }],
    });
  };

  return (
    <S.Container>
      <Modal transparent visible={successful}>
        <Successful onDismiss={handleDismissSuccessful} />
      </Modal>

      <IconButton onPress={() => navigation.goBack()} icon="arrow-back" />
      <S.Body>
        <S.Emoji>😟</S.Emoji>
        <S.Heading>Seus limites de uso acabaram?</S.Heading>
        <S.HeadingMedium>
          Por apenas R$ 10 você pode obter até 10.000 limites de uso
        </S.HeadingMedium>

        <S.LimitAmount>
          {limitAmount}{' '}
          <S.LimitAmountDescription>/limites</S.LimitAmountDescription>
          {'\n'}
          <S.LimitAmountDescription>
            por R$ {calculateDiscount(amount).toFixed(2)}{' '}
            {discount && <S.LimitDiscount>{discount}% off</S.LimitDiscount>}
          </S.LimitAmountDescription>
        </S.LimitAmount>

        <S.LimitDescription>
          (R$ {calculateDiscount(amount) / 20} cada receita gerada).
        </S.LimitDescription>

        <S.LimitIncrementButton onPress={handleIncrementLimitAmount}>
          <S.LimitIncrementText>+5.000 limite</S.LimitIncrementText>
        </S.LimitIncrementButton>

        <ButtonGradient
          onPress={() => setSuccessful(true)}
          title="Adicionar limite"
          icon={null}
        />
      </S.Body>
    </S.Container>
  );
}
