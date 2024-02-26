import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MealDetail = ({duration, affordability, complexity, ContainerStyle, textStyle}) => {
  return (
    <View style={[{ flexDirection: 'row', justifyContent: 'center', padding: 8 }, ContainerStyle]} >
          <Text style={[styles.details, textStyle]} >{duration}min</Text>
          <Text style={[styles.details, textStyle]} >{affordability.toUpperCase()}</Text>
          <Text style={[styles.details, textStyle]} >{complexity.toUpperCase()}</Text>
        </View>
  )
}

export default MealDetail

const styles = StyleSheet.create({
    details: { 
        marginHorizontal: 4
       }
})