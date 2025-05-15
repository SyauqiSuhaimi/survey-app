// app/(tabs)/survey/[id].tsx
import { useLocalSearchParams, useNavigation } from "expo-router";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import Toast from "react-native-toast-message";
import FormComp from "../../components/form";
import { getQuestion, getSubmittedById } from "../../services/SurveyServices";

export default function SurveyDetail() {
  const { id } = useLocalSearchParams();
  const navigation = useNavigation();

  const [questions, setQuestions] = useState([]);
  const [previousAnswers, setPreviousAnswers] = useState([]);

  useEffect(() => {
    navigation.setOptions({
      title: `Survey #${id}`,
    });
  }, [id]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [questionsData, submittedData] = await Promise.all([
          getQuestion(),
          getSubmittedById(id),
        ]);
        setQuestions(questionsData);
        console.log("submittedData", submittedData.answers);
        setPreviousAnswers(submittedData.answers || []);
        console.log("previousAnswers", previousAnswers);
      } catch (error) {
        Toast.show({
          type: "error",
          text1: "Failed to load survey details.",
        });
      }
    };
    if (id) fetchData();
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
