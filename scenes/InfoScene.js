import React, { Component } from 'react';
import {
  ActivityIndicator,
  Text,
  View
} from 'react-native';
import Navbar from '../components/Navbar';
import { Styles } from '../styles/styles';

export default class InfoScene extends Component {
  constructor(props) {
    super(props);
  }

  _onTouchBack = () => {
    this.props.navigator.pop();
  }

  render() {
    return (
      <View style={ Styles.container }>
        <Navbar title="Escalator Detail" navigator={ this.props.navigator } back={ true } />

        <Text style={{ height: 40, padding: 5 }}>{ this.props.escalator }</Text>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'stretch' }}>
          <ActivityIndicator animating={ true } size="large" />
        </View>
      </View>
    );
  }
}