import { Stack } from "expo-router";

export default function SurveyStackLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Survey History" }} />
    </Stack>
  );
}
