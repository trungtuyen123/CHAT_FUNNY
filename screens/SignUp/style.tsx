import {StyleSheet} from 'react-native'
import { COLORS, FONT } from '../../contains/theme'

const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingTop: 40,
   
 },
 keyboard:{ },
 imageLogin: {
    width: 250,
    height: 250
 },
 header: {
    alignContent: 'center',
    alignItems: 'center',
    flex: 9,
 },
 title: {
    fontSize: FONT.title,
    fontWeight: '600'
 },
 body:{
   paddingHorizontal: 16,
   width: "100%",
   paddingTop: 24
 },
 footer:{
   flexDirection: 'row',
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
 }
})

export default styles
