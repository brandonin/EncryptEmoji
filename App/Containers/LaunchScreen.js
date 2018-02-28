import React, { Component } from 'react'
import { ScrollView, Text, Image, View, TextInput } from 'react-native'
import EncryptButton from '../Components/EncryptButton'

import { Images } from '../Themes'

// Styles
import styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends Component {
  constructor (props) {
    super(props);
    this.state = {
      message: "",
      key: ""
    }
  }

  handleChangeMessage(message) {
      this.setState({message});
  }

  handleChangeKey(key) {
      this.setState({key});
  }

  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <View style= {styles.centered}>
            <Text style={styles.sectionText}>
              Encryption Emoji
            </Text>
            <TextInput
              style= {styles.textMessage} multiline= {true}
              numberOfLines= {4} value= {this.state.message}
              placeholder= "Type your message here!"
              placeholderTextColor="white"
              onChangeText= {(message) => this.handleChangeMessage(message)}
            />
            <TextInput
              style= {styles.textKey}
              value= {this.state.key}
              placeholder= "Type an encryption key here!"
              placeholderTextColor="white"
              onChangeText= {(key) => this.handleChangeKey(key)}
            />
          </View>
            <EncryptButton text="Encrypt"/>
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
