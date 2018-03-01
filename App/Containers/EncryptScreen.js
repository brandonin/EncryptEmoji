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
      cipherText: "",
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
    let cipherText = CryptoJS.AES.encrypt(this.state.message, this.state.key).toString();
    let cipherEmoji = [];
    const uppercase = 26;
    const numbers = 10;
    let asciiArray = this.transformToAscii(cipherText);
    for (var i = 0; i < cipherText.length; i++) {
        if (asciiArray[i] === 43) {
            cipherEmoji[i] = this.emojisInit[this.emojisInit.length - 3];
        } else if (asciiArray[i] === 47) {
            cipherEmoji[i] = this.emojisInit[this.emojisInit.length - 2];
        } else if (asciiArray[i] === 61) {
            cipherEmoji[i] = this.emojisInit[this.emojisInit.length - 1];
        } else if (asciiArray[i] < 58) {
            cipherEmoji[i] = this.emojisInit[asciiArray[i] - 48];
        } else if (asciiArray[i] < 91) {
            cipherEmoji[i] = this.emojisInit[asciiArray[i] - (65 - numbers)];
        } else {
            cipherEmoji[i] = this.emojisInit[asciiArray[i] - (97 - numbers - uppercase)];
        }
    }
    cipherEmoji = cipherEmoji.join('');
    this.setState({cipherText});
    this.setState({cipherEmoji});
    this.setState({hidden: false});
  }


  render() {
    return (
      <View style={styles.mainContainer} resizeMode='stretch'>
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Text style={styles.sectionText}>
              Encryption Emoji
            </Text>
            <TextInput style={styles.textMessage} multiline={true} numberOfLines={4} value={this.state.message} placeholder="Type your message here!" placeholderTextColor="white" onChangeText= {(message) => this.handleChangeMessage(message)}/>
            <TextInput style={styles.textKey} value={this.state.key} placeholder="Type an encryption key here!" placeholderTextColor="white" onChangeText= {(key) => this.handleChangeKey(key)}/>
            <EncryptButton text="Encrypt" onPress={this.handleEncryptPress}/>
            {!this.state.hidden && <EncryptMessage style={styles.textKey} value={this.state.cipherEmoji} />}
          </View>
        </ScrollView>
      </View>
    )
  }
}

// <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
// <ScrollView style={styles.container}>
//   <View style={styles.centered}>
//     <Image source={Images.launch} style={styles.logo} />
//   </View>
//
//   <View style={styles.section} >
//     <Image source={Images.ready} />
//     <Text style={styles.sectionText}>
//       This probably isn't what your app is going to look like. Unless your designer handed you this screen and, in that case, congrats! You're ready to ship. For everyone else, this is where you'll see a live preview of your fully functioning app using Ignite.
//     </Text>
//   </View>
//
//   <DevscreensButton />
// </ScrollView>
