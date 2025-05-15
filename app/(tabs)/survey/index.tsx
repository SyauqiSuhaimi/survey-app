import { useFocusEffect } from '@react-navigation/native';
import { useRouter } from "expo-router";
import { useCallback, useState } from "react";
import { FlatList, Pressable, Text, View } from "react-native";
import { getSubmitted } from "../../services/SurveyServices";

type SurveyItem = {
  id: number | string;
  submitDateTime?: string;
  // add other properties if needed
};

export default function SurveyList() {
  const router = useRouter();
  const [items, setItems] = useState<SurveyItem[]>([]);

  useFocusEffect(
  useCallback(() => {
    const fetchSubmitted = async () => {
      try {
        const data = await getSubmitted();
        setItems(data);
      } catch (error) {
        console.error('Failed to fetch submitted items', error);
      }
    };

    fetchSubmitted();

    return () => {};
  }, [])
);


  return (
    <View className="p-4">
      <FlatList
      data={items}
      keyExtractor={(item) => item.id?.toString() || ""}
      renderItem={({ item }) => (
        <Pressable
        className="p-4 bg-white mb-2 rounded"
        onPress={() =>
          router.push({ pathname: "/survey/[id]", params: { id: item.id } })
        }
        >
        <Text>{`Survey ${item.id}`}</Text>
        <Text>{item.submitDateTime}</Text>
        </Pressable>
      )}
      />
    </View>
  );
}
