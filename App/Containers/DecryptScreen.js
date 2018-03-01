import React, {Component} from 'react'
import {ScrollView, Text, Image, View, TextInput} from 'react-native'
import EncryptButton from '../Components/EncryptButton'
import EncryptMessage from './EncryptMessage'
import CryptoJS from 'crypto-js';
import PropTypes from 'prop-types';
import EmojiRegex from 'emoji-regex';

import {Images} from '../Themes'

// Styles
import styles from './Styles/LaunchScreenStyles'

export default class DecryptScreen extends Component {
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
      plainText: "",
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

  transformFromEmojiToLetters(emojiString) {
    const emojis = this.emojisInit;
    // Not enough time to fully implement the shortened version of the decryptor
    // for (var i = 0; i < emojiString.length; i++) {
    //     if (emojiString[i] === emoji[emoji.length - 3]) {
    //         asciiArray.push(43);
    //     } else if (emojiString[i] === emoji[emoji.length - 2]) {
    //         asciiArray.push(47);
    //     } else if (emojiString[i] === emoji[emoji.length - 1]) {
    //         asciiArray.push(61);
    //     } else if (emoji.indexOf(emojiString[i]) < numbers) {
    //         asciiArray.push(emoji.indexOf(emojiString[i]) + 48);
    //     } else if (emoji.indexOf(emojiString[i]) <= (numbers + uppercase)) {
    //         asciiArray.push(emoji.indexOf(emojiString[i]) + (65 - numbers));
    //     } else {
    //         asciiArray.push(emoji.indexOf(emojiString[i]) + (97 - numbers - lowercase));
    //     }
    // }
    // const res = String.fromCharCode(...asciiArray);
    // return res;

    var plainText = emojiString.replace(new RegExp(emojis[0], "g"), "a");
    plainText = plainText.replace(new RegExp(emojis[1], "g"), "b");
    plainText = plainText.replace(new RegExp(emojis[2], "g"), "c");
    plainText = plainText.replace(new RegExp(emojis[3], "g"), "d");
    plainText = plainText.replace(new RegExp(emojis[4], "g"), "e");
    plainText = plainText.replace(new RegExp(emojis[5], "g"), "f");
    plainText = plainText.replace(new RegExp(emojis[6], "g"), "g");
    plainText = plainText.replace(new RegExp(emojis[7], "g"), "h");
    plainText = plainText.replace(new RegExp(emojis[8], "g"), "i");
    plainText = plainText.replace(new RegExp(emojis[9], "g"), "j");
    plainText = plainText.replace(new RegExp(emojis[10], "g"), "k");
    plainText = plainText.replace(new RegExp(emojis[11], "g"), "l");
    plainText = plainText.replace(new RegExp(emojis[12], "g"), "m");
    plainText = plainText.replace(new RegExp(emojis[13], "g"), "n");
    plainText = plainText.replace(new RegExp(emojis[14], "g"), "o");
    plainText = plainText.replace(new RegExp(emojis[15], "g"), "p");
    plainText = plainText.replace(new RegExp(emojis[16], "g"), "q");
    plainText = plainText.replace(new RegExp(emojis[17], "g"), "r");
    plainText = plainText.replace(new RegExp(emojis[18], "g"), "s");
    plainText = plainText.replace(new RegExp(emojis[19], "g"), "t");
    plainText = plainText.replace(new RegExp(emojis[20], "g"), "u");
    plainText = plainText.replace(new RegExp(emojis[21], "g"), "v");
    plainText = plainText.replace(new RegExp(emojis[22], "g"), "w");
    plainText = plainText.replace(new RegExp(emojis[23], "g"), "x");
    plainText = plainText.replace(new RegExp(emojis[24], "g"), "y");
    plainText = plainText.replace(new RegExp(emojis[25], "g"), "z");

    /* Substitute emojis with A - Z Base64 characters. */
    plainText = plainText.replace(new RegExp(emojis[26], "g"), "A");
    plainText = plainText.replace(new RegExp(emojis[27], "g"), "B");
    plainText = plainText.replace(new RegExp(emojis[28], "g"), "C");
    plainText = plainText.replace(new RegExp(emojis[29], "g"), "D");
    plainText = plainText.replace(new RegExp(emojis[30], "g"), "E");
    plainText = plainText.replace(new RegExp(emojis[31], "g"), "F");
    plainText = plainText.replace(new RegExp(emojis[32], "g"), "G");
    plainText = plainText.replace(new RegExp(emojis[33], "g"), "H");
    plainText = plainText.replace(new RegExp(emojis[34], "g"), "I");
    plainText = plainText.replace(new RegExp(emojis[35], "g"), "J");
    plainText = plainText.replace(new RegExp(emojis[36], "g"), "K");
    plainText = plainText.replace(new RegExp(emojis[37], "g"), "L");
    plainText = plainText.replace(new RegExp(emojis[38], "g"), "M");
    plainText = plainText.replace(new RegExp(emojis[39], "g"), "N");
    plainText = plainText.replace(new RegExp(emojis[40], "g"), "O");
    plainText = plainText.replace(new RegExp(emojis[41], "g"), "P");
    plainText = plainText.replace(new RegExp(emojis[42], "g"), "Q");
    plainText = plainText.replace(new RegExp(emojis[43], "g"), "R");
    plainText = plainText.replace(new RegExp(emojis[44], "g"), "S");
    plainText = plainText.replace(new RegExp(emojis[45], "g"), "T");
    plainText = plainText.replace(new RegExp(emojis[46], "g"), "U");
    plainText = plainText.replace(new RegExp(emojis[47], "g"), "V");
    plainText = plainText.replace(new RegExp(emojis[48], "g"), "W");
    plainText = plainText.replace(new RegExp(emojis[49], "g"), "X");
    plainText = plainText.replace(new RegExp(emojis[50], "g"), "Y");
    plainText = plainText.replace(new RegExp(emojis[51], "g"), "Z");

    /* Substitute emojis with 0 - 9 Base64 characters. */
    plainText = plainText.replace(new RegExp(emojis[52], "g"), "0");
    plainText = plainText.replace(new RegExp(emojis[53], "g"), "1");
    plainText = plainText.replace(new RegExp(emojis[54], "g"), "2");
    plainText = plainText.replace(new RegExp(emojis[55], "g"), "3");
    plainText = plainText.replace(new RegExp(emojis[56], "g"), "4");
    plainText = plainText.replace(new RegExp(emojis[57], "g"), "5");
    plainText = plainText.replace(new RegExp(emojis[58], "g"), "6");
    plainText = plainText.replace(new RegExp(emojis[59], "g"), "7");
    plainText = plainText.replace(new RegExp(emojis[60], "g"), "8");
    plainText = plainText.replace(new RegExp(emojis[61], "g"), "9");

    /* Substitute emojis with +, /, and = Base64 characters. */
    plainText = plainText.replace(new RegExp(emojis[62], "g"), "+");
    plainText = plainText.replace(new RegExp(emojis[63], "g"), "/");
    plainText = plainText.replace(new RegExp(emojis[64], "g"), "=");

    return plainText;
  }

  handleEncryptPress() {
    // First we need to turn Emojis into ASCII characters
    let letters = this.transformFromEmojiToLetters(this.state.message);
    try {
        var bytes = CryptoJS.AES.decrypt(letters, this.state.key);
        var plainText = bytes.toString(CryptoJS.enc.Utf8);
        this.setState({plainText});
        this.setState({hidden: false});
    }
  }


  render() {
    return (
      <View style={styles.mainContainer} resizeMode='stretch'>
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Text style={styles.sectionText}>
              Encryption Emoji
            </Text>
            <TextInput style={styles.textMessage} multiline={true} numberOfLines={4} value={this.state.message} placeholder="Paste Your Emojis Here!" placeholderTextColor="white" onChangeText= {(message) => this.handleChangeMessage(message)}/>
            <TextInput style={styles.textKey} value={this.state.key} placeholder="Insert The Encryption Key Here!" placeholderTextColor="white" onChangeText= {(key) => this.handleChangeKey(key)}/>
            <EncryptButton text="Decrypt" onPress={this.handleEncryptPress}/>
            {!this.state.hidden && <EncryptMessage style={styles.textKey} value={this.state.plainText} isEncrytion={false} />}
          </View>
        </ScrollView>
      </View>
    )
  }
}
