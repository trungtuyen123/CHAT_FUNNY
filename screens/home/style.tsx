import {StyleSheet} from 'react-native'
import { COLORS } from '../../contains/theme'

const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: COLORS.white
 },
 blurContainer: {
   padding: 20,
   margin: 16,
   textAlign: 'center',
   justifyContent: 'center',
   overflow: 'hidden',
   borderRadius: 20,
 },
})

export default styles
