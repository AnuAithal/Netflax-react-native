import React from 'react';

import {
  ActivityIndicator,
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import NavBar from './NavBar';
import CarouselComp from './CarouselComp';
import Cards from './Cards';
import Cardss from './Cardss';

function Home() {
  return (
    <SafeAreaView backgroundColor="black">
      <ScrollView>
        <NavBar />
        <CarouselComp />
        <Cards />
        <Cardss />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
});

export default Home;
