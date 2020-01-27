import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Header from '../components/Header';
import CardContainer from '../components/CardContainer';
import NotFoundPet from '../components/NotFoundPet';

const HomeScreen = () => {
  const petList = [];

  const petListComponent = (
    <Text>Pet List</Text>
  );

  return (
    <View style={{ flex: 1 }}>
      <Header title="Who is this pet" />
      <CardContainer>
        {petList.length > 0 ? petListComponent : <NotFoundPet />}
      </CardContainer>
    </View>
  )
};

const styles = StyleSheet.create({});

export default HomeScreen;