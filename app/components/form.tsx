import { useEffect, useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import Toast from "react-native-toast-message";
import "./../global.css";

interface Question {
  id: number;
  question: string;
}

interface Answer {
  id: number;
  answer: string;
  question_id: number;
}

const FormComp = ({
  questions = [],
  previousAnswers = [],
  disabled = false,
}: {
  questions: Question[];
  previousAnswers?: Answer[];
  disabled?: boolean;
}) => {
  const [answers, setAnswers] = useState<Answer[]>([]);

  useEffect(() => {
    if (previousAnswers.length > 0) {
      setAnswers(previousAnswers);
    }
  }, [previousAnswers]);

  const handleChange = (question_id: number, value: string) => {
    setAnswers((prevAnswers) => {
      const existingAnswerIndex = prevAnswers.findIndex(
        (a) => a.question_id === question_id
      );

      if (existingAnswerIndex !== -1) {
        const updatedAnswers = [...prevAnswers];
        updatedAnswers[existingAnswerIndex].answer = value;
        return updatedAnswers;
      } else {
        return [
          ...prevAnswers,
          { id: prevAnswers.length, answer: value, question_id },
        ];
      }
    });
  };

  const handleSave = async () => {
    try {
      const response = await fetch("https://your-api-endpoint.com/survey", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ answers }),
      });

      if (response.ok) {
        Toast.show({
          type: "success",
          text1: "Survey saved!",
        });
        setAnswers([]); // Clear answers
      } else {
        Toast.show({
          type: "error",
          text1: "Failed to save survey.",
        });
      }
    } catch (error) {
      Toast.show({
        type: "error",
        text1: "Failed to save survey.",
      });
    }
  };

  return (
    <View className="w-3/4 bg-white p-6 rounded-2xl ">
      {questions.map((q) => (
        <View key={q.id} className="mb-4">
          <Text className="text-gray-700 mb-2">{q.question}</Text>
          <TextInput
            className={`border rounded-md p-2 ${
              disabled
                ? "border-gray-200 bg-gray-100 text-gray-400"
                : "border-gray-300 bg-white text-black"
            }`}
            value={answers.find((a) => a.question_id === q.id)?.answer || ""}
            onChangeText={(text) => handleChange(q.id, text)}
            editable={!disabled}
            style={{
              cursor: disabled ? "not-allowed" : "text",
            }}
          />
        </View>
      ))}

      {!disabled && <Button title="Save Survey" onPress={handleSave} />}
    </View>
  );
};

export default FormComp;
