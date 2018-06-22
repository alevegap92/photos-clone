import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, StyleSheet, Button, TextInput } from 'react-native'
import { connect } from 'react-redux'
import SignUpForm from './Formas/SignUpForm'

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
})

// create a component
const SignUp = props => {
  const { navigation } = props
  console.log(props)
  return (
    <View style={styles.container}>
      <Text>Componente SignUp</Text>
      <SignUpForm />
      <TextInput placeholder="correo@corre.com" />
      <Button title="Aumentar" onPress={props.aumentar} />
      <Button
        title="Regresar"
        onPress={() => {
          navigation.goBack()
        }}
      />
    </View>
  )
}

SignUp.propTypes = {
  navigation: PropTypes.shape({
    actions: PropTypes.shape({ goBack: PropTypes.func }),
  }).isRequired,
  aumentar: PropTypes.number.isRequired,
}

const mapStateToProps = state => ({
  numero: state.reducerPrueba,
})

const mapDispatchToProps = dispatch => ({
  aumentar: () => {
    dispatch({ type: 'AUMENTAR_REDUCER_PRUEBA' })
  },
})

// export default SignUp
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp)
