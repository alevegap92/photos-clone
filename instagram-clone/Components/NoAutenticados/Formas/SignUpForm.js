import React from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import { Field, reduxForm } from 'redux-form'

const fielNombre = props => {
  return (
    <TextInput
      placeholder="Ingrese Nombre"
      onChangeText={props.input.onChange}
      value={props.input.value}
    />
  )
}

// Field: conecta al textInput con nuetra forma
// -> Detecta cualquier modificacion
// -> Conecta una componente con el STORE
const SignUpForm = props => (
  <View>
    <Field name="nombre" component={fielNombre} />
    <Text>Redux Form</Text>
    <Button
      title="Registrar"
      onPress={props.handleSubmit(value => console.log(value))}
    />
  </View>
)

export default reduxForm({ form: 'SignUpForm' })(SignUpForm)
