import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import styles from "./style";
import { EyeIcon } from "../../assets/icons";
import { COLORS } from "../../contains/theme";
const Input = ({
  lable,
  value,
  onChangeText,
  placeholder,
  passWord = false,
}) => {

  const [showPassword, setShowPassword] = useState(true);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.lable}>{lable}</Text>
      {passWord ? (
        <View style={styles.boxInputIcon}>
          <TextInput
            style={styles.inputIcon}
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            secureTextEntry={showPassword}
          />
            <TouchableOpacity onPress={toggleShowPassword}>
            <EyeIcon width={20} height={20} color={COLORS.subText}/> 
            </TouchableOpacity>
        </View>
      ) : (
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
        />
      )}
    </View>
  );
};

export default Input;
