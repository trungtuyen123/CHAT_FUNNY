import { StyleSheet } from "react-native";
import { COLORS } from "../../contains/theme";

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start', 
    flexDirection: 'row',
    alignItems: "center",
    paddingHorizontal:16,
    paddingTop: 40,
    alignContent: 'center',
    height: 87
  },
 titleCenter:{
  justifyContent: 'center', 

 },
  IconGoback: {
    width: 24,
    height: 24,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    width:270,
    marginRight: 8,
    textAlign: 'center'
  },
  greetingText: {
    fontSize: 16,
    color: COLORS.subText
  },

});

export default styles;
