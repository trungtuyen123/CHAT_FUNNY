import {StyleSheet} from 'react-native';
import { COLORS } from '../../contains/theme';


const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center', 
      paddingHorizontal: 16,
      paddingVertical: 12,
    },
    boxAvatar:{
      marginRight: 10,
      borderRadius:100, 
    },
    avatar: {
      width: 50,
      height: 50,
      borderRadius: 25,
    },
    textContainer: {
      flexDirection: 'column', 
    },
    greetingText: {
      fontSize: 16,
      color: COLORS.subText
    },
    fullNameText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: COLORS.text
    },
  });

  export default styles