import React, { useContext, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import styles from "./style";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useNavigation } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { AuthContext } from "../../navigation/AuthProvider";


const SignUpScreen = () => {
  const [email, setEmail] = useState("");
  const [passWord, setPassWord] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const navigation = useNavigation<any>();

  const { user, register } = useContext(AuthContext);
  

  const handleSignUp = () => {
    console.log("user", user);
    
    register(email, passWord);
    console.log("register",register);
    
    if (passWord !== confirmPass) {
      console.log("mật khẩu không đúng");
    }
  };
  const changeLogin = () => {
    navigation.navigate("Login");
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <KeyboardAwareScrollView
          style={styles.keyboard}
          contentContainerStyle={{ paddingBottom: 40 }}
        >
          <View style={styles.header}>
            <Image
              source={require("../../assets/images/login.png")}
              style={styles.imageLogin}
            />
            <Text style={styles.title}>Đăng ký!</Text>

            <View style={styles.body}>
              <Input
                placeholder="Nhập email đăng nhập..."
                lable="Tài khoản"
                value={email}
                onChangeText={(text) => setEmail(text)}
              />
              <Input
                placeholder="Nhập mật khẩu..."
                lable="Mật khẩu"
                value={passWord}
                onChangeText={(text) => setPassWord(text)}
                passWord={true}
              />
              <Input
                placeholder="Nhập lại mật khẩu..."
                lable="Nhập lại mật khẩu"
                value={confirmPass}
                onChangeText={(text) => setConfirmPass(text)}
                passWord={true}
              />
              <View>
                <Button text={"Đăng Ký"} onPress={handleSignUp} />
              </View>
            </View>
          </View>
        </KeyboardAwareScrollView>
        <View style={styles.footer}>
          <Text>Bạn đã có tài khoản? </Text>
          <Button
            isButtonText={true}
            text={"Đăng Nhập"}
            onPress={changeLogin}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SignUpScreen;
