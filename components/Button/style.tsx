import {StyleSheet} from 'react-native'
import { COLORS, FONT } from '../../contains/theme'
const styles = StyleSheet.create({
 container: {
    paddingVertical: 16,
    backgroundColor: COLORS.primary,
    width: "100%",
    alignItems: 'center',
    borderRadius: 100
 },
 text: {
    fontSize: FONT.lable,
    color: COLORS.white
 },
 buttonText: {
    fontSize: FONT.lable,
    color: COLORS.primary,
    textAlign: 'center'
 }
})

export default styles
