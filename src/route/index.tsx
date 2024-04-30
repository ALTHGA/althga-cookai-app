import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '~/pages/Home';
import { Ingredients } from '~/pages/Ingredients';
import { Limits } from '~/pages/Limits';
import { Recipe } from '~/pages/Recipe';
import { RootStackParamList } from './models/StackParams';

const Stack = createNativeStackNavigator<RootStackParamList>();

export function Route() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: 'none',
        }}
        initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Ingredients" component={Ingredients} />
        <Stack.Screen name="Recipe" component={Recipe} />
        <Stack.Screen name="Limits" component={Limits} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
