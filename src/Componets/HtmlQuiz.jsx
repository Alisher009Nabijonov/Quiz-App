import React, { useState, useEffect } from "react";

const shuffle = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

const questions = [
  {
    questionText: "Mening ismim nima?",
    answerOptions: [
      { answerText: "Alisher", isCorrect: true },
      { answerText: "Kimsanbek", isCorrect: false },
      { answerText: "Kachok", isCorrect: false },
      { answerText: "Chumo", isCorrect: false },
    ],
  },
  {
    questionText: "Mening dvdvfismim nima?",
    answerOptions: [
      { answerText: "Alisher", isCorrect: true },
      { answerText: "Kimsanbek", isCorrect: false },
      { answerText: "Kachok", isCorrect: false },
      { answerText: "Chumo", isCorrect: false },
    ],
  },
  {
    questionText: "Mening ismimvfdv nima?",
    answerOptions: [
      { answerText: "Alisher", isCorrect: true },
      { answerText: "Kimsanbek", isCorrect: false },
      { answerText: "Kachok", isCorrect: false },
      { answerText: "Chumo", isCorrect: false },
    ],
  },
  {
    questionText: "Mening ismim vfdvfdnima?",
    answerOptions: [
      { answerText: "Alisher", isCorrect: false },
      { answerText: "Kimsanbek", isCorrect: false },
      { answerText: "Kachok", isCorrect: true },
      { answerText: "Chumo", isCorrect: false },
    ],
  },
];

const HtmlQuz = () => {
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [currentqustion, setCurrentqustion] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showscore, setShowScore] = useState(false);

  useEffect(() => {
    setShuffledQuestions(shuffle([...questions]));
  }, []);

  if (shuffledQuestions.length === 0) {
    return <div>Loading...</div>;
  }

  const handleAnswerOption = (index, isCorrect) => {
    setAnswered(true);
    setSelectedAnswer(index);
    if (isCorrect) {
      setScore(score + 1);
    }
  };

  const NextQuestion = () => {
    setAnswered(false);
    setSelectedAnswer(null);
    const nextQuestion = currentqustion + 1;
    if (nextQuestion < shuffledQuestions.length) {
      setCurrentqustion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const RestartQuiz = () => {
    setCurrentqustion(0);
    setAnswered(false);
    setSelectedAnswer(null);
    setScore(0);
    setShowScore(false);
    setShuffledQuestions(shuffle([...questions])); 
  };

  return (
    <div className="w-full bg-white">
      <div className="sm:sm:w-[970px] max-w-[90%] mx-auto">
        <div className="flex justify-center items-center h-screen">
          <div className="w-full max-w-lg bg-white p-5 rounded shadow-lg">
            <h1 className="p-2 border text-center font-bold mb-2 text-xl">
              Quiz App Html
            </h1>
            {showscore ? (
              <div className="text-center">
                <div className="mb-4">
                  You scored {score} of {shuffledQuestions.length}
                </div>
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-600"
                  onClick={RestartQuiz}
                >
                  Restart Quiz
                </button>
              </div>
            ) : (
              <div>
                <h1>{shuffledQuestions[currentqustion].questionText}</h1>
                {shuffledQuestions[currentqustion].answerOptions.map(
                  (option, index) => (
                    <button
                      key={index}
                      onClick={() =>
                        handleAnswerOption(index, option.isCorrect)
                      }
                      className={`block w-full p-2 mt-2 rounded border cursor-pointer ${
                        answered
                          ? option.isCorrect
                            ? "bg-green-200"
                            : selectedAnswer === index
                            ? "bg-red-200"
                            : ""
                          : ""
                      }`}
                    >
                      {option.answerText}
                    </button>
                  )
                )}
                <button
                  className={`${
                    answered
                      ? "bg-green-500 cursor-pointer"
                      : "bg-green-300 cursor-no-drop"
                  } my-2 block w-full text-white p-2 rounded`}
                  onClick={NextQuestion}
                  disabled={!answered}
                >
                  Next Question
                </button>
                <p className="text-center text-gray-400 text-sm">
                  Question {currentqustion + 1} of {shuffledQuestions.length}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HtmlQuz;
