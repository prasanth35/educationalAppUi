import React from 'react'
import { Text, View,StyleSheet } from 'react-native'

const MyCourses = () => {
  return (
    <View style={styles.mainContainer}>
        <Text style={styles.text}> My Courses</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer:{
    justifyContent:'center',alignItems:'center',flex:1
  },
  text:{
    fontSize:18,
    fontWeight:'600'
  }
})

export default MyCourses