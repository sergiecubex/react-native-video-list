import React, {useState} from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';

import {useAppStore} from '../store';
import Loading from '../components/Loading';

const FavouritesScreen = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [state, dispatch] = useAppStore();
  const addToFavourite = () => {
    dispatch({type: 'SET_FAVOURITE', payload: null});
    // navigation.navigate('LogIn');
  };
  if (loading) return <Loading />;

  return (
    <SafeAreaView style={styles.screen}>
      <Text>There is no favourites yet here</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    screen: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }
  });

export default FavouritesScreen;
