import {StyleSheet} from 'react-native';
import themes from '../../styles/theme.style'
export default StyleSheet.create({
  textArea: {
    width:100,
    height: 40,
    borderWidth:1,
    borderRadius: 10,
    padding: themes.TEXTAREA_PADDING,
    borderColor: 'gray'
  }
})