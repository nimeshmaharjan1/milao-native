import React, { type ReactNode } from "react";
import { View, type ViewProps } from "react-native";

const Container = ({
  children,
  ...props
}: {
  children: ReactNode;
} & ViewProps) => {
  return <View {...props}>{children}</View>;
};

export default Container;
