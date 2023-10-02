import {StyleSheet} from 'react-native'
import { COLORS, FONT } from '../../contains/theme'
const styles = StyleSheet.create({
 container: {
    width: "100%",
    marginBottom: 16
 },
 lable: {
    fontSize: FONT.lable,
    marginBottom: 8,
    fontWeight: '500',
    color:COLORS.text,
 },
 input: {
    backgroundColor: COLORS.subBg,
    borderRadius: 100,
    width: "100%",
    fontSize: 16,
    paddingVertical: 14,
    paddingHorizontal: 16,
    fontWeight: '400'
 },
 boxInputIcon:{
   flexDirection: 'row',
   width: "100%",
   paddingVertical: 14,
   paddingHorizontal: 16,
   backgroundColor: COLORS.subBg,
   borderRadius: 100,
   justifyContent: 'space-between'
 },
 inputIcon:{
   fontSize: 16,
   fontWeight: '400',
   width: "90%",
 }

})

export default styles
