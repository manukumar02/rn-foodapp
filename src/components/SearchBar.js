import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import { FontAwesome, Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  console.log(term);
  return (
    <View style={styles.backgroundStyle}>
      <Feather name='search' style={styles.iconStyle} />
      <TextInput
        autoCorrect={false}
        autoCapitalize='none'
        placeholder='Search'
        style={styles.inputStyle}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 15,
    backgroundColor: '#f0eeee',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
    marginBottom: 5
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15,
  },
});

// Manu Kumar Sharma has a total of 13 years of experience in IT industry,
//starting with Tata consultancy services, there for almost 4 years and
//moved on to join Accenture and had good technical experience for about 4 years and
//again decides to move on and joined Eaton Technologies, worked on various projects,
//the best one was on IOT, with which I learned too many things and now the product is matured and
//is doing good business globally, there I stayed for about 4 years and
//again moved on and joined Globant as Architect,
//hoping to shape my career more on to a Technical Manager going forward,
//so far the journey has been good with Globant.
