import React, {useState, useEffect} from 'react';
import {FlatList, SafeAreaView, StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';

import getMovies from '../helpers/getMovies';
import Loading from '../components/Loading';
import Movie from '../components/Movie';

const MoviesScreen = ({navigation}) => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    const moviesList = await getMovies();
    if (moviesList) {
      setMovies(await moviesList);
      setLoading(false);
      console.log(await moviesList);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const openMovieHandler = id => {
    navigation.navigate('Details', {
      movieId: id,
    });
  };


  const renderItem = ({item}) => (
    <Movie
      title={item.title}
      onOpenMovie={() => {
        openMovieHandler(item.id);
      }}>
      <FastImage
        style={{width: 200, height: 200}}
        source={{
          uri: `https://image.tmdb.org/t/p/original${item.poster_path}`,
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.contain}
      />
    </Movie>
  );

  if (loading) return <Loading />;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={movies}
        renderItem={renderItem}
        keyExtractor={(item, i) => i}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MoviesScreen;
