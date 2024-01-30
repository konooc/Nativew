import React from 'react';
import { Text, View, Button } from 'react-native';

export default function Pantalla({ navigation }) {
  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Hello, Expo!</Text>
      <Button title="Regresar" onPress={handleGoBack} />
    </View>
  );
}
