import React, {useState, useEffect} from 'react';
import {View, ScrollView, Text, StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';

import getMovies from '../helpers/getMovies';
import Loading from '../components/Loading';
import {useAppStore} from '../store';

const DetailsScreen = props => {
  const [movie, setMovie] = useState();
  const [loading, setLoading] = useState(true);
  const [state, dispatch] = useAppStore();
  const addToFavourite = () => {
    dispatch({type: 'SET_FAVOURITE', payload: null});
  };

  const fetchMovies = async () => {
    const movId = props.route.params.movieId;
    const moviesList = await getMovies();
    const selectedMovie = await moviesList.find(
      item => item.id === movId,
    );
    console.log(await selectedMovie);
    if (selectedMovie) {
      setMovie(await selectedMovie);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  if (loading) return <Loading />;

  return (
    <ScrollView>
      <View style={styles.screen}>
        <Text style={styles.header}>{movie.title}</Text>
        <FastImage
          style={{width: 200, height: 300}}
          source={{
            uri: `https://image.tmdb.org/t/p/original${movie.poster_path}`,
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.contain}
        />
        <Text style={styles.description}>{movie.overview}</Text>
        <Text style={styles.rate}>Rate:{movie.vote_average}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: '10%',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 45,
  },
  description: {
    textAlign: 'center',
    marginVertical: 20,
    fontSize: 16,
    fontStyle: 'italic',
  },
  rate: {
    color: 'red',
  },
});

export default DetailsScreen;
