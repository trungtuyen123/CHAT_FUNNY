import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./style";

const Button = ({ text, onPress, isButtonText = false }) => {
  return !isButtonText ? (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity onPress={onPress}>
     <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
   
  );
};

export default Button;
