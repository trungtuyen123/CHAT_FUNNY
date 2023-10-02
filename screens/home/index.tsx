import { View, Text, StyleSheet, ImageBackground } from "react-native";
import React from "react";
import HeaderHome from "../../components/HeaderHome";
import LottieView from "lottie-react-native";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation<any>();
  const handleDrawer = () => {
    navigation.navigate("Logins");
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/bg.jpg")}
        style={{ flex: 1 }}
      >
        <HeaderHome
          fullName={"Văn Phạm Trung Tuyến"}
          avatar={require("../../assets/images/avatar2.jpg")}
          onPress={handleDrawer}
        />
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
