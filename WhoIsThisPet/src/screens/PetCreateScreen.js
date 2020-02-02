import React from 'react';
import { View, Text, TextInput, StyleSheet, Picker, TouchableOpacity } from 'react-native';
import { withFormik } from 'formik';

import Header from '../components/Header';
import CardContainer from '../components/CardContainer';

const PetAddScreen = (props) => {
  const petTypes = [{ name: 'Cachorro', id: 1 }, { name: 'Gato', id: 2 }, { name: 'Outro', id: 3 }];

  return (
    <View style={{ flex: 1 }}>
      <Header title="Adicionar pet" />
      <CardContainer>
        <View style={{ ...styles.inputContainer, paddingBottom: 5 }}>
          <Text style={styles.textInputTitle}>Nome:</Text>
          <TextInput
            value={props.values.name}
            onChangeText={text => props.setFieldValue('name', text)}
            style={styles.textInput}
            placeholder="Ex: Bob"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.textInputTitle}>Tipo:</Text>
          <Picker
            selectedValue={props.values.typeId}
            onValueChange={value => {
              if(value) props.setFieldValue('typeId', value)}
            }
            style={styles.pickerInput}
          >
            <Picker.Item label='Selecione' value={null} />
            {petTypes.map(type => <Picker.Item label={type.name} value={type.id} key={type.id} />)}
          </Picker>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.textInputTitle}>Gênero:</Text>
          <Picker
              selectedValue={props.values.gender}
              onValueChange={value => {
                if(value) props.setFieldValue('gender', value)}
              }
              style={styles.pickerInput}
            >
              <Picker.Item label='Informe o sexo' value={null} />
              <Picker.Item label='Macho' value='M' />
              <Picker.Item label='Femea' value='F' />
          </Picker>
        </View>

        <TouchableOpacity style={styles.submitButton} onPress={props.handleSubmit} >
          <Text style={{ fontSize: 18, color: '#FFF' }}>Continuar</Text>
        </TouchableOpacity>
      </CardContainer>
    </View>
  )
};

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 30,
    borderColor: 'rgba(0, 0, 0, 0.4)',
    borderBottomWidth: 0.5,
    alignSelf: 'stretch',
  },
  textInput: {
    borderColor: 'red',
    alignSelf: 'stretch',
    fontSize: 20,
    padding: 0,
    paddingTop: 2,
  },
  pickerInput: {
    borderColor: 'red',
    alignSelf: 'stretch',
    fontSize: 20,
  },
  textInputTitle: {
    fontSize: 16
  },
  submitButton: {
    backgroundColor: '#E66B7C',
    paddingHorizontal: 30,
    paddingVertical: 20,
    borderRadius: 30
  }
});

export default withFormik({
  mapPropsToValues: () => ({ typeId: null, name: '', gender: '' }),
  handleSubmit: (values, { props }) => {
    //Submit form
    console.log(values);
    props.navigation.navigate('PetAddPhoto');
  }
})(PetAddScreen);