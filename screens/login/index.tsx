import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useState } from "react";
import styles from "./style";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useNavigation } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [account, setAccount] = useState("");

  const navigation = useNavigation<any>();
  const handleLogin = () => {
    navigation.navigate("Home");
  };
  const changeSignUp = () => {
    navigation.push("SignUp");
    
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      
        <View 
        style={styles.container}>
          <KeyboardAwareScrollView  contentContainerStyle={{ paddingBottom: 40 }}>

          <View style={styles.header}>
            <Image
              source={require("../../assets/images/login.png")}
              style={styles.imageLogin}
            />
            <Text style={styles.title}>Đăng Nhập!</Text>

            <View style={styles.body}>
              <Input
                placeholder="Nhập email đăng nhập..."
                lable="Tài khoản"
                value={email}
                onChangeText={(text: string) => setEmail(text)}
              />
              <Input
                placeholder="Nhập mật khẩu..."
                lable="Mật khẩu"
                value={account}
                onChangeText={(text: string) => setAccount(text)}
                passWord={true}
              />
              <View>
                <Button text={"Đăng Nhập"} onPress={handleLogin} />
              </View>
            </View>
          </View>
          </KeyboardAwareScrollView>
          <View style={styles.footer}>
            <Text>Bạn chưa có tài khoản? </Text>
            <Button
              isButtonText={true}
              text={"Đăng ký"}
              onPress={changeSignUp}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
  );
};

export default LoginScreen;
