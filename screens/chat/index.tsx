import { View, Text, ScrollView } from "react-native";
import React from "react";
import AppBarNav from "../../components/AppBarNav";
import ItemChat from "../../components/ItemChat";
import styles from "./style";

const ChatScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView stickyHeaderIndices={[0]}>
        <AppBarNav titleHeader={"Tin nhắn"} />
        <View style={styles.listItem}>
          <ItemChat
            thumb={require("../../assets/images/bg.jpg")}
            title={"Nhóm nhậu CTO"}
          />
          <ItemChat
            thumb={require("../../assets/images/bg.jpg")}
            title={"Nhóm nhậu CTO"}
          />
          <ItemChat
            thumb={require("../../assets/images/bg.jpg")}
            title={"Nhóm nhậu CTO"}
          />
          <ItemChat
            thumb={require("../../assets/images/bg.jpg")}
            title={"Nhóm nhậu CTO"}
          />
          <ItemChat
            thumb={require("../../assets/images/bg.jpg")}
            title={"Nhóm nhậu CTO"}
          />
          <ItemChat
            thumb={require("../../assets/images/bg.jpg")}
            title={"Nhóm nhậu CTO"}
          />
          <ItemChat
            thumb={require("../../assets/images/bg.jpg")}
            title={"Nhóm nhậu CTO"}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default ChatScreen;
