import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Swiper from 'react-native-swiper';
import requests from '../requests';
import axios from 'axios';

const base_uRL = 'https://image.tmdb.org/t/p/original/';
const API_KEY = 'b93a64480573ce5248c28b200d79d029';

const CarouselComp = () => {
  const screenWidth = Dimensions.get('window').width;
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const movieData = async () => {
      await fetch(
        `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`,
      )
        .then(response => response.json())
        .then(data =>
          setMovies(
            data.results[Math.floor(Math.random() * data.results.length - 1)],
          ),
        );
    };
    movieData();
  }, []);

  return (
    <SafeAreaView>
      <View>
        <ImageBackground
          style={{width: '100%', height: 500, position: 'relative'}}
          source={{
            uri: `https://image.tmdb.org/t/p/original/${movies?.poster_path}`,
          }}
          resizeMode="cover"
        />
      </View>
    </SafeAreaView>
  );
};

export default CarouselComp;
