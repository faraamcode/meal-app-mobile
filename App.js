import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import * as Font from 'expo-font'
import { AppLoading } from 'expo-app-loading'

export default function App () {
  const [loaded, setLoaded] = useState(false)
  const loadFont = () => {
    return Font.loadAsync({
      'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
      'open-sans-regular': require('./assets/fonts/OpenSans-Regular.ttf')
    })
  }
  if (!loaded) {
    return (
      <AppLoading
        startAsync={loadFont}
        onFinish={() => setLoaded(true)}
        onError={err => console.log(err)}
      />
    )
  }
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
