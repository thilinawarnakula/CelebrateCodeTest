
import React, {Component} from 'react';
import RootNavigator from '../src/navigation/RootNavigator';
import {
  View
} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount(){
  }

  componentWillUnmount(){
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <RootNavigator />
      </View>
    );
  }
}

export default App;
