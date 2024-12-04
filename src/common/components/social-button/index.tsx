import { Text, TouchableRipple, useTheme } from "react-native-paper";

const SocialButton = ({ title }: { title?: string }) => {
  const theme = useTheme();
  return (
    <TouchableRipple
      className="py-3 px-2 items-center gap-3"
      style={{
        borderWidth: 1,
        borderRadius: 4,
        borderColor: theme.colors.outline,
      }}
      onPress={() => console.log("hello")}
    >
      <Text
        style={{
          color: theme.colors.primary,
          fontWeight: "bold",
        }}
      >
        {title ? title : "Sign Up with Google"}
      </Text>
    </TouchableRipple>
  );
};
export default SocialButton;
