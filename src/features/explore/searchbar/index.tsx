import { router } from "expo-router";
import React from "react";
import { Searchbar } from "react-native-paper";
const inputAccessoryViewID = "uniqueID";
const initialText = "";
const ExploreSearchbar = () => {
  const [searchQuery, setSearchQuery] = React.useState(initialText);

  return (
    <Searchbar
      // inputAccessoryViewID={inputAccessoryViewID}
      placeholder="What's on your todo list?"
      onChangeText={setSearchQuery}
      onSubmitEditing={() => router.push("/explore/search")}
      value={searchQuery}
    />
  );
};

export default ExploreSearchbar;
