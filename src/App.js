import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    // Initialize Firebase
    const config = {
      apiKey: 'AIzaSyAikfu49Px6LgAIYkusmKFqgP8dfeKatds',
      authDomain: 'manager-bb435.firebaseapp.com',
      databaseURL: 'https://manager-bb435.firebaseio.com',
      projectId: 'manager-bb435',
      storageBucket: 'manager-bb435.appspot.com',
      messagingSenderId: '1054664969798'
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
