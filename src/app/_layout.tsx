import UIProvider from "@/common/providers/ui-provider";
import { Stack } from "expo-router";
export default function RootLayout() {
  return (
    <UIProvider>
      <Stack>
        <Stack.Screen
          name="(user)"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </UIProvider>
  );
}
