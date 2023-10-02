import React, { ReactNode } from "react";
import { Text, View, TouchableOpacity, SafeAreaView, StatusBar } from "react-native";
import styles from "./style";
import { BlurView } from "expo-blur";

interface AppBarNavProps {
  titleHeader: string;
  onPress?: () => void;
  iconRight?: boolean;
  nameIconRight?: string;
  goback?: boolean;
  onPressIconRight?: () => void;
}

const AppBarNav: React.FC<AppBarNavProps> = ({
  titleHeader,
  onPress,
  iconRight = false,
  nameIconRight,
  goback = false,
  onPressIconRight
}) => {
  return (
    <BlurView intensity={80} tint="default" style={[styles.container, !goback && styles.titleCenter]}>
      <SafeAreaView style={{ flex: 0, backgroundColor: 'transparent' }} />
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent={true} />
      {goback && <Text>icon</Text>}
      <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>
        {titleHeader}
      </Text>
      {iconRight && onPressIconRight && (
        <TouchableOpacity onPress={onPressIconRight}>
          <Text>icon</Text>
        </TouchableOpacity>
      )}
    </BlurView>
  );
};

export default AppBarNav;