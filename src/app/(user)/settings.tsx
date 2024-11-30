import { View } from "react-native";
import { Button } from "react-native-paper";

const Settings = () => {
  return (
    <View style={{ margin: 16 }}>
      <Button icon="repeat" mode="outlined" onPress={() => {}}>
        Toggle Theme
      </Button>
    </View>
  );
};
export default Settings;
