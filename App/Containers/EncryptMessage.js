import React, {Component} from 'react';
import {View, Text} from 'react-native';

import styles from './Styles/LaunchScreenStyles'

export default class EncryptMessage extends Component {

  render() {
    return (
      <View style={styles.centered}>
        <Text style={styles.subtitle}>
            Give this encrypted message to a friend with the key!
        </Text>
        <Text style={this.props.style}>
          {this.props.value}
        </Text>
      </View>
    )
  }
}
