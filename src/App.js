import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
