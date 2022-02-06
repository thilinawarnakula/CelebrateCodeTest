
import React, {Component} from 'react';
import RootNavigator from '../src/navigation/RootNavigator';
import {
  View,
  LogBox
} from 'react-native';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from '../src/redux/reducers';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
  }

  render() {
    LogBox.ignoreAllLogs();
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <View style={{ flex: 1 }}>
          <RootNavigator />
        </View>
      </Provider>
    );
  }
}

export default App;
