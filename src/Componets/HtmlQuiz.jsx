import React, { useState, useEffect } from "react";

const shuffle = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

const questions = [
  {
    questionText: "HTML nima?",
    answerOptions: [
      { answerText: "Hyper Text Markup Language", isCorrect: true },
      { answerText: "Home Tool Markup Language", isCorrect: false },
      { answerText: "Hyperlinks and Text Markup Language", isCorrect: false },
      { answerText: "Highlevel Text Management Language", isCorrect: false },
    ],
  },
  {
    questionText: "HTML faylining kengaytmasi qanday?",
    answerOptions: [
      { answerText: ".html ", isCorrect: true },
      { answerText: ".doc", isCorrect: false },
      { answerText: ".txt", isCorrect: false },
      { answerText: ".css", isCorrect: false },
    ],
  },
  {
    questionText: "HTMLda qanday teg sarlavha yaratadi?",
    answerOptions: [
      { answerText: "h1", isCorrect: true },
      { answerText: "p", isCorrect: false },
      { answerText: "div", isCorrect: false },
      { answerText: "header", isCorrect: false },
    ],
  },
  {
    questionText: "HTMLda rasm qo'shish uchun qaysi teg ishlatiladi?",
    answerOptions: [
      { answerText: "src", isCorrect: false },
      { answerText: "picture", isCorrect: false },
      { answerText: "img", isCorrect: true },
      { answerText: "video", isCorrect: false },
    ],
  },
  {
    questionText: "HTMLda bog'lanma uchun qaysi teg ishlatiladi?",
    answerOptions: [
      { answerText: "link", isCorrect: false },
      { answerText: "a", isCorrect: true },
      { answerText: "url", isCorrect: false },
      { answerText: "href", isCorrect: false },
    ],
  },
  {
    questionText: "HTMLda jadval yaratish uchun qaysi teg ishlatiladi?",
    answerOptions: [
      { answerText: "tbody", isCorrect: false },
      { answerText: "tr", isCorrect: false },
      { answerText: "td", isCorrect: false },
      { answerText: "table", isCorrect: true },
    ],
  },
  {
    questionText: "HTMLda yozuvni qalin qilish uchun qaysi teg ishlatiladi?",
    answerOptions: [
      { answerText: "bold", isCorrect: false },
      { answerText: "b", isCorrect: true },
      { answerText: "br", isCorrect: false },
      { answerText: "deg", isCorrect: false },
    ],
  },
  {
    questionText: "HTMLda spisok yaratish uchun qaysi teg ishlatiladi?",
    answerOptions: [
      { answerText: "li", isCorrect: false },
      { answerText: "ol", isCorrect: false },
      { answerText: "a", isCorrect: false },
      { answerText: "ul", isCorrect: true },
    ],
  },
  {
    questionText:
      "HTMLda qaysi teg matnni qatorga o‘tish uchun ishlatiladi?",
    answerOptions: [
      { answerText: "br", isCorrect: true },
      { answerText: "break", isCorrect: false },
      { answerText: "td", isCorrect: false },
      { answerText: "n", isCorrect: false },
    ],
  },
  {
    questionText: "HTMLda qaysi teg fayllarni bog'lash uchun ishlatiladi?",
    answerOptions: [
      { answerText: "img", isCorrect: false },
      { answerText: "src", isCorrect: false },
      { answerText: "link", isCorrect: true },
      { answerText: "connect", isCorrect: false },
    ],
  },
  {
    questionText: "HTMLda form yaratish uchun qaysi teg ishlatiladi?",
    answerOptions: [
      { answerText: "input", isCorrect: false },
      { answerText: "form", isCorrect: true },
      { answerText: "button", isCorrect: false },
      { answerText: "textarea", isCorrect: false },
    ],
  },
  {
    questionText: "HTMLda qaysi teg video qo'shish uchun ishlatiladi?",
    answerOptions: [
      { answerText: "img", isCorrect: false },
      { answerText: "video", isCorrect: true },
      { answerText: "movie", isCorrect: false },
      { answerText: "src", isCorrect: false },
    ],
  },
  {
    questionText: "HTML hujjatida qaysi teg asosiy konteyner hisoblanadi?",
    answerOptions: [
      { answerText: "html", isCorrect: true },
      { answerText: "body", isCorrect: false },
      { answerText: "head", isCorrect: false },
      { answerText: "main", isCorrect: false },
    ],
  },
  {
    questionText: "HTMLda eng katta sarlavha tegi qaysi?",
    answerOptions: [
      { answerText: "h6", isCorrect: false },
      { answerText: "p", isCorrect: false },
      { answerText: "h1", isCorrect: true },
      { answerText: "a", isCorrect: false },
    ],
  },
  {
    questionText:
      "HTMLda faylni tashqi CSS bilan bog'lash uchun qaysi teg ishlatiladi?",
    answerOptions: [
      { answerText: "css", isCorrect: false },
      { answerText: "style", isCorrect: false },
      { answerText: "link", isCorrect: true },
      { answerText: "script", isCorrect: false },
    ],
  },
  {
    questionText: "HTMLda sahifa sarlavhasini qaysi teg belgilaydi?",
    answerOptions: [
      { answerText: "head", isCorrect: false },
      { answerText: "header", isCorrect: false },
      { answerText: "title", isCorrect: true },
      { answerText: "h1", isCorrect: false },
    ],
  },
  {
    questionText:
      "HTMLda sahifaning metama'lumotlari uchun qaysi teg ishlatiladi?",
    answerOptions: [
      { answerText: "information", isCorrect: false },
      { answerText: "data", isCorrect: false },
      { answerText: "meta", isCorrect: true },
      { answerText: "info", isCorrect: false },
    ],
  },
  {
    questionText:
      " HTMLda foydalanuvchi kiritmalarini qabul qilish uchun qaysi teg ishlatiladi?",
    answerOptions: [
      { answerText: "form", isCorrect: false },
      { answerText: "input", isCorrect: true },
      { answerText: "select", isCorrect: false },
      { answerText: "textarea", isCorrect: false },
    ],
  },
  {
    questionText: "HTMLda skriptlar qo'shish uchun qaysi teg ishlatiladi?",
    answerOptions: [
      { answerText: "java", isCorrect: false },
      { answerText: "style", isCorrect: false },
      { answerText: "code", isCorrect: false },
      { answerText: "script", isCorrect: true },
    ],
  },
  {
    questionText: "HTMLda ichki CSS qo'shish uchun qaysi teg ishlatiladi?",
    answerOptions: [
      { answerText: "style", isCorrect: true },
      { answerText: "css", isCorrect: false },
      { answerText: "link", isCorrect: false },
      { answerText: "design", isCorrect: false },
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
