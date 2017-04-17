import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  Alert,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

import { Styles } from '../styles/styles';
import CheckEx from './CheckEx';
import EscalatorName from './EscalatorName';

export default class Escalator extends Component {
  constructor(props) {
    super(props);
  }

  getNameForDirection(direction) {
    if (direction == 'up') {
      return (
        <Text style={{ fontSize: 15 }}>
          { this.props.bottom }
          { "  " }
          <Icon name="md-arrow-up" size={ 20 } />
          { "  " }
          { this.props.top }
        </Text>
      );
    } else {
      return (
        <Text style={{ fontSize: 15, flex: 1 }}>
          { this.props.top }
          { "  " }
          <Icon name="md-arrow-down" size={ 20 } />
          { "  " }
          { this.props.bottom}
        </Text>
      );
    }
  }

  _onPressUpInfo = () => {
    this.props.navigator.push({
      name: 'Info View',
      escalator: {
        id: this.props.id,
        direction: 'up'
      }
    });
  }

  _onPressDownInfo = () => {
    this.props.navigator.push({
      name: 'Info View',
      escalator: {
        id: this.props.id,
        direction: 'down'
      }
    });
  }

  render() {
    return (
      <View>
        <View style={ Styles.escalatorRow }>
          <TouchableHighlight onPress={ this._onPressUpInfo }
                              underlayColor="#fff"
                              activeOpacity={ 1 }
                              style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row' }}>
              <CheckEx on={ this.props.up } />
              <EscalatorName {...this.props} direction="up" />
            </View>
          </TouchableHighlight>
        </View>

        <View style={ Styles.escalatorRow }>
          <TouchableHighlight onPress={ this._onPressDownInfo }
                              underlayColor="#fff"
                              activeOpacity={ 1 }
                              style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row' }}>
              <CheckEx on={ this.props.down } />
              <EscalatorName {...this.props} direction="down" />
            </View>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}
