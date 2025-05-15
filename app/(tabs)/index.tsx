import { useEffect, useState } from "react";
import { View } from "react-native";
import Toast from "react-native-toast-message";
import FormComp from "../components/form";
import { getQuestion } from "../services/SurveyServices";
import "./../global.css";

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

export default function Index() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await getQuestion();
        setQuestions(response); // Adjust if response shape is different
      } catch (error) {
        Toast.show({
          type: "error",
          text1: "Failed to load questions",
        });
      }
    };
    fetchQuestions();
  }, []);

  return (
    <View className="h-full flex justify-center items-center">
      <FormComp questions={questions} previousAnswers={undefined} />
      <Toast />
    </View>
  );
}
