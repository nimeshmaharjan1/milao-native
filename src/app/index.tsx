import StyledView from "@/common/components/styled/styled-view";
import { Link, router } from "expo-router";
import React from "react";
import { View } from "react-native";
import { Button, Text } from "react-native-paper";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

const OnboardingIndexPage = () => {
  const { bottom } = useSafeAreaInsets();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StyledView
        style={{
          flex: 1,
          justifyContent: "space-between",
          paddingBottom: bottom,
        }}
      >
        <View className="flex-1 justify-center gap-14">
          <View className="gap-4">
            <Text variant="headlineLarge">Icon</Text>
            <Text
              variant="headlineLarge"
              style={{
                fontWeight: 700,
              }}
            >
              Tackle every project in your home or under the sun.
            </Text>
          </View>

          <View className="gap-4">
            <Text>Have you used Milao before?</Text>
            <Button
              mode="contained"
              onPress={() => router.push("/(onboarding)")}
            >
              It's my first time!
            </Button>
            <Button mode="outlined" onPress={() => console.log("hello")}>
              I've used it before
            </Button>
          </View>
        </View>
        <View>
          <Text>
            Are you a local professional?{" "}
            <Link
              href={"/(user)/settings"}
              className="text-blue-500 dark:text-blue-400"
            >
              Go here
            </Link>
          </Text>
        </View>
      </StyledView>
    </SafeAreaView>
  );
};

export default OnboardingIndexPage;
