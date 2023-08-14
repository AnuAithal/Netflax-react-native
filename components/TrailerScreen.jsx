import {View, Text, StyleSheet, Dimensions, Button} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import movieTrailer from 'movie-trailer';
import YoutubePlayer from 'react-native-youtube-iframe';
import NavBar from './NavBar';

const windowWidth = Dimensions.get('window').width;

const TrailerScreen = () => {
  const route = useRoute();
  const {movie} = route.params;
  const [playerUrl, setPlayerUrl] = useState('');

  const navigation = useNavigation();

  useEffect(() => {
    const fetchTrailerUrl = async () => {
      const movieName = movie?.title || movie?.name;
      try {
        const url = await movieTrailer(movieName || '');
        if (url) {
          const videoId = url.split('v=')[1];
          setPlayerUrl(videoId);
        } else {
          setPlayerUrl('');
        }
      } catch (error) {
        setPlayerUrl('');
      }
    };

    fetchTrailerUrl();
  }, [movie]);

  return (
    <>
      <NavBar />
      <View style={styles.container}>
        <View style={styles.playerContainer}>
          {playerUrl && (
            <>
              <YoutubePlayer height={300} videoId={playerUrl} play={true} />
            </>
          )}
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: windowWidth,
    backgroundColor: 'black',
  },
  playerContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  noTrailerText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
  },
  backgroundImage: {
    flex: 1,
    alignItems: 'center',
    height: 250,
  },
  title: {
    color: 'white',
    fontSize: 25,
    marginTop: 250,
    width: windowWidth,
    backgroundColor: 'rgba(128, 128, 128, 0.3)',
  },
  overview: {
    color: 'white',
    fontSize: 14,
    backgroundColor: 'rgba(128, 128, 128, 0.3)',
    width: windowWidth,
  },
});

export default TrailerScreen;
