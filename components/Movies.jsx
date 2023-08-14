import React, {useEffect, useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Modal,
  Button,
} from 'react-native';
import NavBar from './NavBar';
import {useNavigation} from '@react-navigation/native';

const MovieCards = ({item, onPress}) => (
  <TouchableOpacity onPress={() => onPress(item)}>
    <View>
      <Image
        style={{
          width: 105,
          margin: 10,
          height: 152,
          borderRadius: 6,
          resizeMode: 'cover',
        }}
        source={{
          uri: `https://image.tmdb.org/t/p/original/${item?.poster_path}`,
        }}
      />
    </View>
  </TouchableOpacity>
);

const MovieDetails = ({isVisible, onClose, movie, onPlay}) => {
  if (!isVisible) return null;

  const navigation = useNavigation();

  const handlePlay = () => {
    navigation.navigate('Trailer', {movie: movie});
    onClose();
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}>
      <View style={styles.modalContainer}>
        <Image
          style={{
            width: '100%',
            margin: 10,
            height: '35%',
            borderRadius: 20,
            resizeMode: 'cover',
            marginTop: 0,
          }}
          source={{
            uri: `https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`,
          }}
        />

        <TouchableOpacity style={styles.playButton}>
          <Text
            style={{color: 'black', fontWeight: 'bold'}}
            onPress={handlePlay}>
            Play ▶
          </Text>
        </TouchableOpacity>
        <Text style={styles.modalTitle}>{movie?.title}</Text>
        <Text style={styles.modalOverview}>{movie.overview}</Text>

        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
          <Text style={{color: 'black', fontWeight: 'bold'}}>Close</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const movieData = async () => {
      await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=243e4c829c03af820debe020b717349b&with_genres=28`,
      )
        .then(response => response.json())
        .then(data => setMovies(data.results));
    };
    movieData();
  }, []);

  const openModal = movie => {
    setSelectedMovie(movie);
    setModalVisible(true);
  };

  const closeModal = () => {
    setSelectedMovie(null);
    setModalVisible(false);
  };

  return (
    <SafeAreaView backgroundColor="black">
      <NavBar />

      <ScrollView horizontal>
        <FlatList
          data={movies}
          numColumns={3}
          renderItem={({item}) => (
            <MovieCards item={item} onPress={openModal} />
          )}
          keyExtractor={item => item.id.toString()}
        />
      </ScrollView>

      <MovieDetails
        isVisible={isModalVisible}
        onClose={closeModal}
        movie={selectedMovie}
      />
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
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    width: '85%',
    maxHeight: '65%',
    marginTop: '30%',
    marginLeft: '6%',
    borderRadius: 20,
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    maxHeight: '80%',
    overflow: 'hidden',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white',
    paddingTop: 10,
  },
  modalOverview: {
    color: 'white',
    maxWidth: '90%',
    marginLeft: -10,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 10,
  },
  closeButton: {
    marginTop: 'auto',
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    width: 70,
    height: 30,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 220,
  },
  playButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    width: 80,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginLeft: -20,
  },
});

export default Movies;
