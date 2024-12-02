import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { View } from "react-native";
import { useTheme } from "react-native-paper";
const Logo = ({ size = 42, color }: { size?: number; color?: string }) => {
  const theme = useTheme();
  return (
    <View>
      <MaterialIcons
        color={color ? color : theme.colors.primary}
        size={size}
        name="av-timer"
      ></MaterialIcons>
    </View>
  );
};

export default Logo;
