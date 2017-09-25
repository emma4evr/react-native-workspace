// index.ios.js - place code in here for iOS!

// import a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// create a component
  /* option one for structuring component

const App = () => {
  return (
    <Text>Some Text</Text>
  );
};

  */

// option two, using ES6/JSX syntax
const App = () => (
  <View>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
);

// render it to the device
AppRegistry.registerComponent('albums', () => App);
