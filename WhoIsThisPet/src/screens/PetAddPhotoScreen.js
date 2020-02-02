import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Header from '../components/Header';
import CardContainer from '../components/CardContainer';

const PetAddPhotoScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header title="Who is this pet" />
      <CardContainer>
        <Text>Teste</Text>
      </CardContainer>
    </View>
  )
};

const styles = StyleSheet.create({});

export default PetAddPhotoScreen;