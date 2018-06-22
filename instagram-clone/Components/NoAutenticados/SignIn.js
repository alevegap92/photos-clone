import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, StyleSheet, Button } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
})

const SignIn = props => {
  console.log(props)
  //   props.navigation.navigate();
  const { navigation } = props
  return (
    <View style={styles.container}>
      <Text>Componente SignIn</Text>
      <Button
        title="Navegar SignUp"
        onPress={() => {
          navigation.navigate('SignUp')
        }}
      />
    </View>
  )
}

  SignIn.propTypes = {
    navigation: PropTypes.shape({
      actions: PropTypes.shape({ navegate: PropTypes.func }),
    }).isRequired,
  }

export default SignIn
