import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';

const NotFoundPet = ({ navigation }) => {
  return (
    <>
      <View style={{ opacity: 0.4 }}>
        <Image 
          style={styles.image}
          source={require('../../assets/images/pet-not-found-image.png')}
        />
        <Text style={styles.message}>Nenhum PET encontrado.</Text>
      </View>
      
      <TouchableOpacity 
        style={styles.ctaCreatePet}
        onPress={() => navigation.navigate('PetAdd')}
      >
        <Text style={styles.ctaCreatePetText}>Adicionar seu PET</Text>
      </TouchableOpacity>
    </>
  )
};

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200
  },
  message: {
    marginTop: 10,
    fontSize: 20
  },
  ctaCreatePet: {
    marginTop: 50,
    backgroundColor: '#E66B7C',
    alignSelf: 'stretch',
    alignItems: 'center',
    paddingVertical: 10,
    opacity: 1
  },
  ctaCreatePetText: {
    color: '#FFF', 
    fontSize: 25, 
    fontWeight: 'bold'
  }
});

export default withNavigation(NotFoundPet);