import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import AppBarNav from "../../components/AppBarNav";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import styles from "./style";
import { ImageIcon } from "../../assets/icons";
import { COLORS } from "../../contains/theme";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as ImagePicker from "expo-image-picker";
import NotificationComponent from "../../Notification";

const InfoScreen = () => {
  const [fullName, setFullName] = useState("Văn Phạm Trung Tuyến");
  const [account, setAccount] = useState("vpttuyen@gmail.com");
  const [passWord, setPassWord] = useState("tuyenmro");
  const [avatar, setAvatar] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [notifi, setNotifi] = useState(false);

  // const dataNotifi= {
  //   title: "Trung Tuyến 📬",
  //   body: "Đây là thông báo thành công",
  //   data: { data: "goes here" },
  // }

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setNotifi(true);
      setIsLoading(true);
      setAvatar(result.assets[0].uri);
      setTimeout(() => {
        setNotifi(false);
        setIsLoading(false);
      }, 1000);
    }
  };

  const handleChangePassWord = () => {
    Alert.prompt(
      "Đổi mật khẩu",
      null,
      (text: string) => {
        setPassWord(text);
      },
      "secure-text",
      passWord
    );
  };
  const demoNotification = {
    request: {
      content: {
        title: "Demo Notification",
        body: "This is a demo notification",
        data: { key: "value" },
      },
    },
  };

  return (
    <KeyboardAwareScrollView
      style={styles.container}
      keyboardOpeningTime={0}
      stickyHeaderIndices={[0]}
    >
      <AppBarNav titleHeader="Tài khoản" />
      <ImageBackground
        source={require("../../assets/images/bg.jpg")}
        style={styles.bgAccount}
      >
        <TouchableOpacity style={styles.boxAvatar} onPress={pickImage}>
          {isLoading && (
            <ActivityIndicator
              size="large"
              color={COLORS.primary}
              style={styles.loading}
            />
          )}
          <Image
            style={styles.avatar}
            source={
              avatar
                ? { uri: avatar }
                : {
                    uri: "https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-1/327209766_862817568264345_9185622725308031903_n.jpg?stp=cp6_dst-jpg_p160x160&_nc_cat=106&ccb=1-7&_nc_sid=fe8171&_nc_ohc=xE9QyB_QjC8AX_sV5G8&_nc_ht=scontent.fdad3-5.fna&oh=00_AfDiG-0f8H3pU075s6hNmSoUSHf71v-hnZzgGpyCXyUTnQ&oe=651F57E0",
                  }
            }
          />
          <TouchableOpacity style={styles.ImageIcon}>
            <ImageIcon width={24} height={24} color={COLORS.primary} />
          </TouchableOpacity>
        </TouchableOpacity>
      </ImageBackground>
      <View style={styles.body}>
        <Text style={styles.nickName}>{fullName}</Text>
        <View style={styles.InputInfo}>
          <Input
            lable={"Họ & tên"}
            value={fullName}
            onChangeText={(text: string) => setFullName(text)}
            placeholder={fullName}
          />
          <Input
            lable={"Email"}
            value={account}
            onChangeText={(text: string) => setAccount(text)}
            placeholder={account}
          />
          <Input
            lable={"Mật khẩu"}
            value={passWord}
            onChangeText={(text: string) => setPassWord(text)}
            placeholder={passWord}
            passWord={true}
          />
        </View>
        {notifi && (
          <NotificationComponent
            title="Trung Tuyến 📬"
            body="Đây là thông báo thành công"
            data={{ data: "goes here" }}
          />
        )}
        <Button
          isButtonText={true}
          onPress={handleChangePassWord}
          text={"Đổi mật khẩu?"}
        />
      </View>
    </KeyboardAwareScrollView>
  );
};

export default InfoScreen;
function schedulePushNotification() {
  throw new Error("Function not implemented.");
}
