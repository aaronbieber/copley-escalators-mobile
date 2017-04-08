import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  Text
} from 'react-native';

export default class ElevatorName extends Component {
  render() {
    var style = this.props.style || { fontSize: 15 };

    if (this.props.direction == 'up') {
      return (
        <Text style={ style }>
          { this.props.bottom }
          { "  " }
          <Icon name="md-arrow-up" size={ 20 } />
          { "  " }
          { this.props.top }
        </Text>
      );
    } else {
      return (
        <Text style={ style }>
          { this.props.top }
          { "  " }
          <Icon name="md-arrow-down" size={ 20 } />
          { "  " }
          { this.props.bottom}
        </Text>
      );
    }
  }
}
