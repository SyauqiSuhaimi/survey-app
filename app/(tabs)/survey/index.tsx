import { useRouter } from "expo-router";
import { FlatList, Pressable, Text, View } from "react-native";

const items = [
  { id: "1", name: "Survey A" },
  { id: "2", name: "Survey B" },
];

export default function SurveyList() {
  const router = useRouter();

  return (
    <View className="p-4">
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable
            className="p-4 bg-white mb-2 rounded"
            onPress={() =>
              router.push({ pathname: "/survey/[id]", params: { id: item.id } })
            }
          >
            <Text>{item.name}</Text>
          </Pressable>
        )}
      />
    </View>
  );
}
