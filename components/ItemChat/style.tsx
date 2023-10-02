import { StyleSheet } from "react-native";
import { COLORS, FONT } from "../../contains/theme";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal:16,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.subBg,
    borderRadius: 16,
    marginBottom: 12
  },

  title: {
    fontSize: FONT.lable,
  },
  thumb: {
   width: 50,
   height: 50,
   borderRadius: 100,
   marginRight: 8
  },

});

export default styles;
