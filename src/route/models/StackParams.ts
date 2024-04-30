import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  Ingredients: undefined;
  Recipe: undefined;
  Limits: undefined;
};

export type StackProps = NativeStackNavigationProp<RootStackParamList, 'Home'>;
