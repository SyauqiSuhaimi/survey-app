import { View } from "react-native";
import Toast from "react-native-toast-message";
import FormComp from "../components/form";
import "./../global.css";
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

export default function Index() {
  return (
    <View className="h-full flex justify-center items-center">
      <FormComp questions={questions} previousAnswers={previousAnswers} />
      <Toast />
    </View>
  );
}
