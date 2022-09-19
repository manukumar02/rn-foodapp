import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ResultsDetail = ({result}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: result.image_url}} style={styles.image}/>
      <Text style={styles.name}>{result.name}</Text>
      <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
    </View>
  )
}

export default ResultsDetail

const styles = StyleSheet.create({
    container:{
        marginLeft: 15,

    },  
    image: {
        width: 250,
        borderRadius: 4,
        height: 120,
        marginBottom:5
    },
    name:{
        fontWeight: 'bold',
        fontSize: 16
    }
})