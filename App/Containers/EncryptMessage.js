import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';

import styles from './Styles/LaunchScreenStyles'

export default class EncryptMessage extends Component {

  render() {
    const isEncryption = this.props.isEncryption ?
    "Give this encrypted message to a friend with the key!" :
    "Here's your decrypted message!";

    return (
      <View style={styles.centered}>
        <Text style={styles.subtitle}>
            {isEncryption}
        </Text>
        <TextInput multiline={true} style={this.props.style} selectTextOnFocus={true} value={this.props.value}/>
      </View>
    )
  }
}
