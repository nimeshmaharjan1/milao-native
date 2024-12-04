import { MaterialCommunityIcons } from "@expo/vector-icons";
import { CommonActions } from "@react-navigation/native";
import { Tabs } from "expo-router";
import React from "react";
import { BottomNavigation } from "react-native-paper";
const UserPortalLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
      tabBar={({ navigation, state, descriptors, insets }) => (
        <BottomNavigation.Bar
          navigationState={state}
          safeAreaInsets={insets}
          onTabPress={({ route, preventDefault }) => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (event.defaultPrevented) {
              preventDefault();
            } else {
              // router.push({
              //   pathname: route.name as any,
              //   params: route.params as any,
              // });
              navigation.dispatch({
                ...CommonActions.navigate(route.name, route.params),
                target: state.key,
              });
            }
          }}
          renderIcon={({ route, focused, color }) => {
            const { options } = descriptors[route.key];
            if (options.tabBarIcon) {
              return options.tabBarIcon({ focused, color, size: 24 });
            }

            return null;
          }}
          getLabelText={({ route }) => {
            const { options } = descriptors[route.key];
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                  ? options.title
                  : "Home";

            return label as string;
          }}
        />
      )}
    >
      <Tabs.Screen
        name="explore/index"
        options={{
          tabBarLabel: "Explore",
          tabBarIcon: ({ color, size }) => {
            return (
              <MaterialCommunityIcons
                name="compass-outline"
                size={size}
                color={color}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="projects/index"
        options={{
          tabBarLabel: "Projects",
          tabBarIcon: ({ color, size }) => {
            return (
              <MaterialCommunityIcons
                name="check-circle-outline"
                size={size}
                color={color}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="inbox/index"
        options={{
          tabBarLabel: "Inbox",
          tabBarIcon: ({ color, size }) => {
            return (
              <MaterialCommunityIcons
                name="message-outline"
                size={size}
                color={color}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="you/index"
        options={{
          tabBarLabel: "You",
          tabBarIcon: ({ color, size }) => {
            return (
              <MaterialCommunityIcons
                name="account-box-outline"
                size={size}
                color={color}
              />
            );
          },
        }}
      />
    </Tabs>
  );
};

export default UserPortalLayout;
