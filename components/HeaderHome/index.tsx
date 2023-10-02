import React from "react";
import {
  Image,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { BlurView } from "expo-blur";
import styles from "./style";

const HeaderHome = ({ fullName, avatar, onPress }) => {
  console.log("onPress", onPress);
  return (
    <BlurView intensity={80} tint="light">
      <SafeAreaView/>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="white"
        translucent={true}
      />
      <TouchableOpacity onPress={onPress} style={styles.container}>
        <View style={styles.boxAvatar}>
          <Image source={avatar} style={styles.avatar} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.greetingText}>Wellcome!</Text>
          <Text style={styles.fullNameText}>{fullName}</Text>
        </View>
      </TouchableOpacity>
    </BlurView>
  );
};

export default HeaderHome;
