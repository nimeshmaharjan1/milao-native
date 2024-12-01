import React from "react";
import { Alert, StatusBar } from "react-native";

import { Feather } from "@expo/vector-icons";
import Onboarding from "react-native-onboarding-swiper";
import { Button, useTheme } from "react-native-paper";

const WithCTA = () => {
  const theme = useTheme();
  return (
    <Onboarding
      showDone={false}
      onSkip={() => {
        Alert.alert(
          "Skipped",
          "hello",
          [
            {
              text: "Reject",
              onPress: () => Alert.alert("reject pressed"),
              style: "destructive",
            },
            {
              text: "Cancel",
              onPress: () => Alert.alert("cancel pressed"),
              style: "cancel",
            },
          ],
          {
            userInterfaceStyle: "dark",
          }
        );
      }}
      pages={[
        {
          title: "Hey!",
          subtitle: "Welcome to $App!",
          backgroundColor: theme.colors.primaryContainer,
          image: <Feather name="home" size={100} color={"white"} />,
        },
        {
          title: "Send Messages",
          subtitle: "You can reach everybody with us",
          backgroundColor: "#5e92f3",
          image: <Feather name="home" size={100} color={"white"} />,
        },
        {
          title: "Get Notified",
          subtitle:
            "We will send you notification as soon as something happened",
          backgroundColor: "#1565c0",
          image: <Feather name="home" size={100} color={"white"} />,
        },
        {
          title: "That's Enough",
          subtitle: (
            <Button
              onPress={() => {
                Alert.alert("done");
                StatusBar.setBarStyle("default");
              }}
            >
              Hello
            </Button>
          ),
          backgroundColor: theme.colors.primaryContainer,
          image: <Feather name="home" size={100} color={"white"} />,
        },
      ]}
    />
  );
};

export default WithCTA;
