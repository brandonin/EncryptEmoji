import React, {Component} from 'react'
import {ScrollView, Text, Image, View, TextInput} from 'react-native'
import EncryptButton from '../Components/EncryptButton'
import EncryptMessage from './EncryptMessage'
import CryptoJS from 'crypto-js';
import PropTypes from 'prop-types';

import {Images} from '../Themes'

// Styles
import styles from './Styles/LaunchScreenStyles'

export default class EncryptScreen extends Component {
    emojisInit = ["🍎", "🍌", "🏎", "🚪", "👁", "👣", "😀", "🖐", "ℹ", "😂", "🥋", "✉", "🚹", "🌉", "👌", "🍍", "👑", "👉", "🎤", "🚰", "☂", "🐍", "💧", "✖", "☀", "🦓", "🏹", "🎈", "😎", "🎅", "🐘", "🌿", "🌏", "🌪", "☃", "🍵", "🍴", "🚨", "📮", "🕹", "📂", "🛩", "⌨", "🔄", "🔬", "🐅", "🙃", "🐎", "🌊", "🚫", "❓", "⏩", "😁", "😆", "💵", "🤣", "☺", "😊", "😇", "😡", "🎃", "😍", "✅", "🔪", "🗒"];

    static propTypes = {
      onChangeText: PropTypes.func,
      onPress: PropTypes.func,
    }

  constructor(props) {
    super(props);
    this.state = {
      message: "",
      key: "",
      cipherEmoji: "",
      hidden: true
    }
    this.handleEncryptPress = this.handleEncryptPress.bind(this);
  }

  handleChangeMessage(message) {
    this.setState({message});
  }

  handleChangeKey(key) {
    this.setState({key});
  }

  transformToAscii(string) {
    const strSplit = string.split('');
    const res = strSplit.map(l => l.charCodeAt());
    return res;
  }

  handleEncryptPress() {
    const encryption = CryptoJS.AES.encrypt(this.state.message, this.state.key).toString();
    emojis = this.emojisInit;
    // let cipherEmoji = [];
    // const uppercase = 26;
    // const numbers = 10;
    // let asciiArray = this.transformToAscii(cipherEmoji);
    // Not enough time to implement the full version of the encryptor
    // for (var i = 0; i < cipherEmoji.length; i++) {
    //     if (asciiArray[i] === 43) {
    //         cipherEmoji[i] = this.emojisInit[this.emojisInit.length - 3];
    //     } else if (asciiArray[i] === 47) {
    //         cipherEmoji[i] = this.emojisInit[this.emojisInit.length - 2];
    //     } else if (asciiArray[i] === 61) {
    //         cipherEmoji[i] = this.emojisInit[this.emojisInit.length - 1];
    //     } else if (asciiArray[i] < 58) {
    //         cipherEmoji[i] = this.emojisInit[asciiArray[i] - 48];
    //     } else if (asciiArray[i] < 91) {
    //         cipherEmoji[i] = this.emojisInit[asciiArray[i] - (65 - numbers)];
    //     } else {
    //         cipherEmoji[i] = this.emojisInit[asciiArray[i] - (97 - numbers - uppercase)];
    //     }
    // }
    // cipherEmoji = cipherEmoji.join('');
    /* Substitute a - z Base64 characters with emojis. */
    let cipherEmoji = encryption.replace(/a/g, emojis[0]);
    cipherEmoji = cipherEmoji.replace(/b/g, emojis[1]);
    cipherEmoji = cipherEmoji.replace(/c/g, emojis[2]);
    cipherEmoji = cipherEmoji.replace(/d/g, emojis[3]);
    cipherEmoji = cipherEmoji.replace(/e/g, emojis[4]);
    cipherEmoji = cipherEmoji.replace(/f/g, emojis[5]);
    cipherEmoji = cipherEmoji.replace(/g/g, emojis[6]);
    cipherEmoji = cipherEmoji.replace(/h/g, emojis[7]);
    cipherEmoji = cipherEmoji.replace(/i/g, emojis[8]);
    cipherEmoji = cipherEmoji.replace(/j/g, emojis[9]);
    cipherEmoji = cipherEmoji.replace(/k/g, emojis[10]);
    cipherEmoji = cipherEmoji.replace(/l/g, emojis[11]);
    cipherEmoji = cipherEmoji.replace(/m/g, emojis[12]);
    cipherEmoji = cipherEmoji.replace(/n/g, emojis[13]);
    cipherEmoji = cipherEmoji.replace(/o/g, emojis[14]);
    cipherEmoji = cipherEmoji.replace(/p/g, emojis[15]);
    cipherEmoji = cipherEmoji.replace(/q/g, emojis[16]);
    cipherEmoji = cipherEmoji.replace(/r/g, emojis[17]);
    cipherEmoji = cipherEmoji.replace(/s/g, emojis[18]);
    cipherEmoji = cipherEmoji.replace(/t/g, emojis[19]);
    cipherEmoji = cipherEmoji.replace(/u/g, emojis[20]);
    cipherEmoji = cipherEmoji.replace(/v/g, emojis[21]);
    cipherEmoji = cipherEmoji.replace(/w/g, emojis[22]);
    cipherEmoji = cipherEmoji.replace(/x/g, emojis[23]);
    cipherEmoji = cipherEmoji.replace(/y/g, emojis[24]);
    cipherEmoji = cipherEmoji.replace(/z/g, emojis[25]);

    /* Substitute A - Z Base64 characters with emojis. */
    cipherEmoji = cipherEmoji.replace(/A/g, emojis[26]);
    cipherEmoji = cipherEmoji.replace(/B/g, emojis[27]);
    cipherEmoji = cipherEmoji.replace(/C/g, emojis[28]);
    cipherEmoji = cipherEmoji.replace(/D/g, emojis[29]);
    cipherEmoji = cipherEmoji.replace(/E/g, emojis[30]);
    cipherEmoji = cipherEmoji.replace(/F/g, emojis[31]);
    cipherEmoji = cipherEmoji.replace(/G/g, emojis[32]);
    cipherEmoji = cipherEmoji.replace(/H/g, emojis[33]);
    cipherEmoji = cipherEmoji.replace(/I/g, emojis[34]);
    cipherEmoji = cipherEmoji.replace(/J/g, emojis[35]);
    cipherEmoji = cipherEmoji.replace(/K/g, emojis[36]);
    cipherEmoji = cipherEmoji.replace(/L/g, emojis[37]);
    cipherEmoji = cipherEmoji.replace(/M/g, emojis[38]);
    cipherEmoji = cipherEmoji.replace(/N/g, emojis[39]);
    cipherEmoji = cipherEmoji.replace(/O/g, emojis[40]);
    cipherEmoji = cipherEmoji.replace(/P/g, emojis[41]);
    cipherEmoji = cipherEmoji.replace(/Q/g, emojis[42]);
    cipherEmoji = cipherEmoji.replace(/R/g, emojis[43]);
    cipherEmoji = cipherEmoji.replace(/S/g, emojis[44]);
    cipherEmoji = cipherEmoji.replace(/T/g, emojis[45]);
    cipherEmoji = cipherEmoji.replace(/U/g, emojis[46]);
    cipherEmoji = cipherEmoji.replace(/V/g, emojis[47]);
    cipherEmoji = cipherEmoji.replace(/W/g, emojis[48]);
    cipherEmoji = cipherEmoji.replace(/X/g, emojis[49]);
    cipherEmoji = cipherEmoji.replace(/Y/g, emojis[50]);
    cipherEmoji = cipherEmoji.replace(/Z/g, emojis[51]);

    /* Substitute 0 - 9 Base64 characters with emojis. */
    cipherEmoji = cipherEmoji.replace(/0/g, emojis[52]);
    cipherEmoji = cipherEmoji.replace(/1/g, emojis[53]);
    cipherEmoji = cipherEmoji.replace(/2/g, emojis[54]);
    cipherEmoji = cipherEmoji.replace(/3/g, emojis[55]);
    cipherEmoji = cipherEmoji.replace(/4/g, emojis[56]);
    cipherEmoji = cipherEmoji.replace(/5/g, emojis[57]);
    cipherEmoji = cipherEmoji.replace(/6/g, emojis[58]);
    cipherEmoji = cipherEmoji.replace(/7/g, emojis[59]);
    cipherEmoji = cipherEmoji.replace(/8/g, emojis[60]);
    cipherEmoji = cipherEmoji.replace(/9/g, emojis[61]);

    /* Substitute +, /, and = Base64 characters with emojis. */
    cipherEmoji = cipherEmoji.replace(/\+/g, emojis[62]);
    cipherEmoji = cipherEmoji.replace(/\//g, emojis[63]);
    cipherEmoji = cipherEmoji.replace(/=/g, emojis[64]);
    this.setState({cipherEmoji});
    this.setState({hidden: false});
  }


  render() {
    return (
      <View style={styles.mainContainer} resizeMode='stretch'>
        <ScrollView style={styles.container} keyboardShouldPersistTaps='never'>
          <View style={styles.centered}>
            <Text style={styles.sectionText}>
              Encryption Emoji
            </Text>
            <TextInput style={styles.textMessage} multiline={true} numberOfLines={4} value={this.state.message} placeholder="Type your message here!" placeholderTextColor="white" onChangeText= {(message) => this.handleChangeMessage(message)}/>
            <TextInput style={styles.textKey} value={this.state.key} placeholder="Type an encryption key here!" placeholderTextColor="white" onChangeText= {(key) => this.handleChangeKey(key)}/>
            <EncryptButton text="Encrypt" onPress={this.handleEncryptPress}/>
            {!this.state.hidden && <EncryptMessage style={styles.textKey} value={this.state.cipherEmoji} isEncryption={true} />}
          </View>
        </ScrollView>
      </View>
    )
  }
}
