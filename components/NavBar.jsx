import React from 'react';
import {
  Alert,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';

const NavBar = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const isActiveRoute = routeName => {
    return route.name === routeName;
  };


  return (
    <SafeAreaView>
      <View style={styles.navbar}>
        <Image
          style={{height: 50, width: 60}}
          source={{
            uri: 'https://www.freepnglogos.com/uploads/netflix-logo-app-png-16.png',
          }}
        />
        <View style={[styles.navbar, styles.navbarText]}>
          <TouchableOpacity>
            <Text
              onPress={() => navigation.navigate('Home')}
              style={[
                styles.tabText,
                isActiveRoute('Home') && styles.activeTab,
              ]}>
              Home
            </Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text
              onPress={() => navigation.navigate('Movies')}
              style={[
                styles.tabText,
                isActiveRoute('Movies') && styles.activeTab,
              ]}>
              Movies
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {navigation.navigate('Login')}}>
            <Image
              style={{height: 50, width: 60, marginLeft: 130}}
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/128/11472/11472783.png',
              }}
              
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  navbar: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'black',
    alignItems: 'center',
    height: 60,
  },
  tabText: {
    color: 'white',
    padding: 10,
    gap: 30,
  },
  activeTab: {
    textDecorationLine: 'underline',
    textDecorationColor: 'red',
    fontWeight: 'bold',
    color: 'red',
  },
});

export default NavBar;
