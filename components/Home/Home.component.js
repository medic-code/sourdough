import React from 'react';
import {View, Text, TextInput} from 'react-native'
import styles from './Home.component.style';
import TextArea from '../TextArea/TextArea.component'

const Home = () => {
  return(
    <View style={styles.container}>
      <Text> Sourdough </Text>
      <TextArea/>
    </View>
  )
}

export default Home;