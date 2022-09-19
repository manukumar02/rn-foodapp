import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import yelp from '../api/yelp';

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam('id');

  console.log(result);

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(()=> {
    getResult(id);
  }, []);

  if(!result) {
    return null;
  }

  return (
    <View>
      <Text>{result.name}</Text>
      <FlatList 
        data={result.photos}
        keyExtractor={(photo)=> photo}
        renderItem={({item})=> {
            return <Image style={styles.image} source={{uri: item}} />
        }}
      />
    </View>
  );
};

export default ResultsShowScreen;

const styles = StyleSheet.create({
    image:{
        height: 200,
        width: 300
    }
});
