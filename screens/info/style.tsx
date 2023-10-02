import { StyleSheet } from "react-native";
import { COLORS, FONT } from "../../contains/theme";

const styles = StyleSheet.create({
  container: {
   flex: 1,
   backgroundColor: COLORS.white,
  },
  listItem: {
    marginTop: 12,
   paddingHorizontal: 16

  },
  bgAccount: {
    width: "100%",
    height: 250,
    alignItems: 'center',
  },
  avatar:{
    height:120,
    width: 120,
    borderRadius: 100,
  },
  boxAvatar:{
    borderRadius: 100,
    bottom: -180,
    borderWidth: 5,
    borderColor: COLORS.white,
  },
  ImageIcon: {
    padding: 3,
    backgroundColor: COLORS.white,
    position: 'absolute',
    borderRadius: 30,
    right: 0,
    bottom: 0
  },
  nickName: {
    fontSize: FONT.title,
    fontWeight: '600',
    textAlign: 'center'
  },
  body:{
    paddingTop: 65,
    justifyContent: 'center',
  },
  InputInfo:{
    paddingTop: 24,
    paddingHorizontal:16
  },
  loading:{
    position: 'absolute',
    bottom: 0,
    left: 0,
    
  }
});

export default styles;
