import { View, Text,StyleSheet, StatusBar } from 'react-native'
import React from 'react'
import RootNavigator from './src/navigation/RootNavigator'


 export default function  App()  {
  return (
    <View style={styles.container}>
      <StatusBar
      barStyle="light-content"
      backgroundColor = 'black'
      />
     <RootNavigator/>
    
    </View>
  )
}


const styles = StyleSheet.create({
  container:{flex:1},
})
