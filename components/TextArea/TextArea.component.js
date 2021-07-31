import React,{useState} from 'react';
import {TextInput, View} from 'react-native';
import styles from './TextArea.component.style';

const TextArea = () => {
  const [text,setText] = useState('');

  return (
    <TextInput 
      style={styles.textArea}
      onChangeText={(text) => setText(text) }
      value={text}
    />
  )
}

export default TextArea;