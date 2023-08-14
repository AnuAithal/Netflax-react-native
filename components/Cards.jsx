import React, {useEffect, useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableOpacity,
  Pressable,
} from 'react-native';

const API_KEY = 'b93a64480573ce5248c28b200d79d029';

const Cards = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const movieData = async () => {
      await fetch(
        `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`,
      )
        .then(response => response.json())
        .then(data => setMovies(data.results));
    };
    movieData();
  }, []);

  return (
    <SafeAreaView>
      <Text style={styles.text}>Trending Now</Text>
      <ScrollView horizontal>
        <View style={{display: 'flex', flexDirection: 'row'}}>
          {movies.slice(1, 10).map((movie, id) => (
            <View key={id} style={{marginLeft: 15}}>
              <Text
                style={{
                  fontSize: 85,
                  color: 'white',
                  fontWeight: 'bold',
                  position: 'absolute',
                  zIndex: 5,
                  top: 40,
                  right: 90,
                  marginTop: 20,
                }}>
                {id + 1}
              </Text>
              <Pressable onPress={() => Alert.alert(movie.title)}>
                <Image
                  
                  style={{
                    width: 105,
                    margin: 10,
                    height: 152,
                    borderRadius: 6,
                    resizeMode: 'cover',
                  }}
                  source={{
                    uri: `https://image.tmdb.org/t/p/original/${movie?.poster_path}`,
                  }}
                />
              </Pressable>
            </View>
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

export default Cards;
