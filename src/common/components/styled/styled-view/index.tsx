import React from "react";
import { View, type ViewProps } from "react-native";

const StyledView = ({
  children,
  ...props
}: { children: React.ReactNode } & ViewProps) => {
  return (
    <View
      {...props}
      style={[
        {
          paddingHorizontal: 24,
        },
        props.style,
      ]}
    >
      {children}
    </View>
  );
};

export default StyledView;
