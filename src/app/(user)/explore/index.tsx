import ExploreSearchbar from "@/features/explore/searchbar";
import React from "react";
import { FlatList, ScrollView, View } from "react-native";
import { Card, Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
const cardData = [
  {
    id: "1",
    title: "House Cleaning",
    subtitle: "58 local pros",
    imageUri: "https://picsum.photos/700",
  },
  {
    id: "2",
    title: "Car Repair",
    subtitle: "32 local pros",
    imageUri: "https://picsum.photos/701",
  },
  {
    id: "3",
    title: "Gardening Services",
    subtitle: "20 local pros",
    imageUri: "https://picsum.photos/702",
  },
  {
    id: "4",
    title: "Electrician",
    subtitle: "15 local pros",
    imageUri: "https://picsum.photos/703",
  },
  {
    id: "5",
    title: "Plumbing",
    subtitle: "45 local pros",
    imageUri: "https://picsum.photos/704",
  },
];

const ExploreScreen = () => {
  return (
    <SafeAreaView className="p-4 gap-8">
      {/* <InputAccessoryView nativeID={inputAccessoryViewID}>
        <Button
          mode="contained"
          theme={{
            roundness: 0,
          }}
          onPress={() => {
            setSearchQuery(initialText);
          }}
        >
          Clear Text
        </Button>
      </InputAccessoryView> */}
      <ExploreSearchbar />
      <ScrollView contentContainerClassName="gap-3 pb-14">
        <View className="based-on-your-activity-section">
          <Text className="!font-bold" variant="titleLarge">
            Based on your activity
          </Text>
          <FlatList
            horizontal
            contentContainerClassName="gap-4 py-6"
            data={cardData}
            keyExtractor={(i) => i.id}
            renderItem={(item) => (
              <Card
                onPress={() => console.log("hello")}
                style={{
                  minWidth: 260,
                }}
              >
                <Card.Cover source={{ uri: item.item.imageUri }} />
                <Card.Title
                  title={item.item.title}
                  subtitle={item.item.subtitle}
                />
              </Card>
            )}
          ></FlatList>
        </View>
        <View className="trending-section">
          <Text className="!font-bold" variant="titleLarge">
            Trending Now
          </Text>
          <FlatList
            horizontal
            contentContainerClassName="gap-4 py-6"
            data={cardData}
            keyExtractor={(i) => i.id}
            renderItem={(item) => (
              <Card
                onPress={() => console.log("hello")}
                style={{
                  minWidth: 260,
                }}
              >
                <Card.Cover source={{ uri: item.item.imageUri }} />
                <Card.Title
                  title={item.item.title}
                  subtitle={item.item.subtitle}
                />
              </Card>
            )}
          ></FlatList>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ExploreScreen;
