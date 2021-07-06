import React from 'react';
import {Image, Text, TouchableOpacity, View, StyleSheet} from 'react-native';

const Movie = props => {
  return (
    <TouchableOpacity style={styles.movie} onPress={props.onOpenMovie}>
      <Text style={styles.title}>{props.title}</Text>
      {props.children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  movie: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    borderRadius: 10,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 20,
    marginHorizontal: '10%'
  },
  title: {
    fontSize: 24,
    marginBottom: 15
  },
  image: {
    width: 50,
    height: 50,
  },
});

export default Movie;
