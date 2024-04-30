import React from 'react';

import { StyleSheet } from 'react-native';
import { Provider } from '~/components/Provider';
import { Route } from '~/route';

export default function App() {
  return (
    <Provider>
      <Route />
    </Provider>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
