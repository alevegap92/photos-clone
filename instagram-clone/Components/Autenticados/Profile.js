// import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

// create a component
class Profile extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text>Profile</Text>
        <Button
          title="Publicación"
          onPress={() => {
            navigation.navigate('Publicacion');
          }}
        />
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

// make this component available to the app
export default Profile;
