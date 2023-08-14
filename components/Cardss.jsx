import React, {useEffect, useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const API_KEY = 'b93a64480573ce5248c28b200d79d029';

const Cardss = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const movieData = async () => {
      await fetch(
        `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`,
      )
        .then(response => response.json())
        .then(data => setMovies(data.results));
    };
    movieData();
  }, []);

  return (
    <SafeAreaView>
      <Text style={styles.text}>Netflix Originals</Text>
      <ScrollView horizontal>
        <View style={{display: 'flex', flexDirection: 'row'}}>
          {movies.slice(1, 10).map((movie, id) => (
            <Image
              key={id}
              style={{
                width: 105,
                margin: 10,
                height: 152,
                borderRadius: 6,
                resizeMode: 'cover',
                marginLeft: 25,
              }}
              source={{
                uri: `https://image.tmdb.org/t/p/original/${movie?.poster_path}`,
              }}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 10,
    marginLeft: 10,
    color: 'white',
  },
  navbarText: {
    padding: 20,
    gap: 30,
  },
});

export default Cardss;
