import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';

import Header from '../components/Header';
import CardContainer from '../components/CardContainer';

const PetAddPhotoScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header title="Adicionar fotos" />
      <CardContainer>
        <TouchableOpacity style={styles.buttonUpload}>
          <FontAwesomeIcon icon={ faCamera } size={36} style={{ color: 'rgb(229, 84, 41)' }} />
          <Text style={{ color: 'rgb(229, 84, 41)' }}>ADD FOTO</Text>
        </TouchableOpacity>
      </CardContainer>
    </View>
  )
};

const styles = StyleSheet.create({
  buttonUpload: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 180,
    height: 100,
    borderWidth: 2,
    borderColor: 'rgba(229, 84, 41, .4)',
    backgroundColor: 'rgba(229, 84, 41, .2)',
  }
});

export default PetAddPhotoScreen;