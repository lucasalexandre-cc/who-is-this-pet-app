import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Header from '../components/Header';
import NotFoundPet from '../components/NotFoundPet';

const HomeScreen = () => {
  const petList = [];

  const petListComponent = (
    <Text>Pet List</Text>
  );

  return (
    <View style={styles.container}>
      <Header title="Who is this pet" />
      {petList.length > 0 ? petListComponent : <NotFoundPet />}
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

export default HomeScreen;