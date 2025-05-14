// app/(tabs)/survey/[id].tsx
import { useLocalSearchParams, useNavigation } from "expo-router";
import { useEffect } from "react";
import { Text, View } from "react-native";
import Toast from "react-native-toast-message";
import FormComp from "../../components/form";

const questions = [
  {
    id: 1,
    question: "What is your name?",
  },
  {
    id: 2,
    question: "What is your age?",
  },
  {
    id: 3,
    question: "Where do you live?",
  },
];

const previousAnswers = [
  {
    id: 1,
    answer: "John",
    question_id: 1,
  },
  {
    id: 2,
    answer: "25",
    question_id: 2,
  },
  {
    id: 3,
    answer: "Selangor",
    question_id: 3,
  },
];
export default function SurveyDetail() {
  const { id } = useLocalSearchParams();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: `Survey #${id}`,
    });
  }, [id]);

  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-xl">Answering survey {id}</Text>
      <FormComp
        disabled={true}
        questions={questions}
        previousAnswers={previousAnswers}
      />
      <Toast />
    </View>
  );
}
