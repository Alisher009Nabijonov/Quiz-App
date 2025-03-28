import React, { useState, useEffect } from "react";

const shuffle = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

const questions = [
  {
    questionText: "CSS nima uchun ishlatiladi?",
    answerOptions: [
      { answerText: "Veb-sahifa tuzilishini belgilash uchun", isCorrect: false },
      { answerText: "Sahifa ko'rinishini bezatish uchun", isCorrect: true },
      { answerText: "Ma'lumotlarni bazaga saqlash uchun", isCorrect: false },
      { answerText: "JavaScript kodini yozish uchun", isCorrect: false },
    ],
  },
  {
    questionText: "CSSda rangni belgilash uchun qaysi xususiyat ishlatiladi?",
    answerOptions: [
      { answerText: "color", isCorrect: true },
      { answerText: "background", isCorrect: false },
      { answerText: "font-size", isCorrect: false },
      { answerText: "margin", isCorrect: false },
    ],
  },
  {
    questionText: "CSSda qanday qilib sahifaga fon rangi qo'shish mumkin?",
    answerOptions: [
      { answerText: "background-color", isCorrect: true },
      { answerText: "font-color", isCorrect: false },
      { answerText: "border-color", isCorrect: false },
      { answerText: "color", isCorrect: false },
    ],
  },
  {
    questionText: "CSS qaysi turdagi faylda saqlanadi?",
    answerOptions: [
      { answerText: ".html", isCorrect: false },
      { answerText: ".css", isCorrect: true },
      { answerText: ".js", isCorrect: false },
      { answerText: ".json", isCorrect: false },
    ],
  },
  {
    questionText: "CSSda qaysi xususiyat elementlarning tashqi masofasini belgilaydi?",
    answerOptions: [
      { answerText: "margin", isCorrect: true },
      { answerText: "padding", isCorrect: false },
      { answerText: "border", isCorrect: false },
      { answerText: "outline", isCorrect: false },
    ],
  },
  {
    questionText: "CSSda matn o'lchamini o'zgartirish uchun qaysi xususiyat ishlatiladi?",
    answerOptions: [
      { answerText: "font-size", isCorrect: true },
      { answerText: "text-size", isCorrect: false },
      { answerText: "text-height", isCorrect: false },
      { answerText: "font-style", isCorrect: false },
    ],
  },
  {
    questionText: "CSS qaysi usulda HTML fayliga ulanishi mumkin?",
    answerOptions: [
      { answerText: "Inline, Internal, External", isCorrect: true },
      { answerText: "Inline va Inline", isCorrect: false },
      { answerText: "Link va Script", isCorrect: false },
      { answerText: "HTML orqali", isCorrect: false },
    ],
  },
  {
    questionText: "CSSda elementlarni qator bo'ylab joylashtirish uchun qaysi xususiyat ishlatiladi?",
    answerOptions: [
      { answerText: "display: inline", isCorrect: true },
      { answerText: "display: block", isCorrect: false },
      { answerText: "float", isCorrect: false },
      { answerText: "flex-direction", isCorrect: false },
    ],
  },
  {
    questionText: "CSSda font-family nima uchun ishlatiladi?",
    answerOptions: [
      { answerText: "Matnni joylashtirish uchun", isCorrect: false },
      { answerText: "Matn shriftini belgilash uchun", isCorrect: true },
      { answerText: "Matn rangini belgilash uchun", isCorrect: false },
      { answerText: "Matn hajmini belgilash uchun", isCorrect: false },
    ],
  },
  {
    questionText: "CSSda hover pseudo-class nima uchun ishlatiladi?",
    answerOptions: [
      { answerText: "Element ustiga sichqoncha olib borilganda uslub qo'llash uchun", isCorrect: true },
      { answerText: "Elementni ko'chirish uchun", isCorrect: false },
      { answerText: "Element rangini o'zgartirish uchun", isCorrect: false },
      { answerText: "HTML-ni o'zgartirish uchun", isCorrect: false },
    ],
  },
  {
    questionText: "CSSda border-radius nima uchun ishlatiladi?",
    answerOptions: [
      { answerText: "Matnni o'zgartirish uchun", isCorrect: false },
      { answerText: "Chegarani yumaloqlashtirish uchun", isCorrect: true },
      { answerText: "Rangni qo'shish uchun", isCorrect: false },
      { answerText: "Matnni kesish uchun", isCorrect: false },
    ],
  },
  {
    questionText: "CSSda z-index nima qiladi?",
    answerOptions: [
      { answerText: "Elementni 3D o'lchovda tartiblaydi", isCorrect: false },
      { answerText: "Elementlar qavat tartibini belgilaydi", isCorrect: true },
      { answerText: "Element rangini aniqlaydi", isCorrect: false },
      { answerText: "Element hajmini o'zgartiradi", isCorrect: false },
    ],
  },
  {
    questionText: "CSSda flexbox yordamida elementlarni qanday joylashtirish mumkin?",
    answerOptions: [
      { answerText: "display: flex", isCorrect: true },
      { answerText: "display: inline", isCorrect: false },
      { answerText: "display: grid", isCorrect: false },
      { answerText: "display: block", isCorrect: false },
    ],
  },
  {
    questionText: "CSS grid qaysi maqsadda ishlatiladi?",
    answerOptions: [
      { answerText: "Elementlarni animatsiya qilish uchun", isCorrect: false },
      { answerText: "Elementlarni grid tuzilmasida joylashtirish uchun", isCorrect: true },
      { answerText: "Element rangini o'zgartirish uchun", isCorrect: false },
      { answerText: "Elementlarni yashirish uchun", isCorrect: false },
    ],
  },
  {
    questionText: "CSSda opacity qiymati nimani belgilaydi?",
    answerOptions: [
      { answerText: "Elementning ko'rinuvchanlik darajasini", isCorrect: true },
      { answerText: "Elementning kattaligini", isCorrect: false },
      { answerText: "Elementning rangini", isCorrect: false },
      { answerText: "Elementning pozitsiyasini", isCorrect: false },
    ],
  },
  {
    questionText: "CSSda padding nima qiladi?",
    answerOptions: [
      { answerText: "Element ichki masofasini belgilaydi", isCorrect: true },
      { answerText: "Element tashqi masofasini belgilaydi", isCorrect: false },
      { answerText: "Element rangini belgilaydi", isCorrect: false },
      { answerText: "Elementning chetini o'zgartiradi", isCorrect: false },
    ],
  },
  {
    questionText: "CSSda elementni markazlash uchun qaysi xususiyat ishlatiladi?",
    answerOptions: [
      { answerText: "text-align: center", isCorrect: true },
      { answerText: "margin: 0", isCorrect: false },
      { answerText: "float: center", isCorrect: false },
      { answerText: "align: center", isCorrect: false },
    ],
  },
  {
    questionText: "CSSda media query nima uchun ishlatiladi?",
    answerOptions: [
      { answerText: "Animatsiya yaratish uchun", isCorrect: false },
      { answerText: "Qurilma o'lchamiga moslashtirish uchun", isCorrect: true },
      { answerText: "Chegaralarni sozlash uchun", isCorrect: false },
      { answerText: "Fon rangi o'zgartirish uchun", isCorrect: false },
    ],
  },
  {
    questionText: "CSS-da qaysi xususiyat shrift stilini o'zgartiradi?",
    answerOptions: [
      { answerText: "font-style", isCorrect: true },
      { answerText: "font-size", isCorrect: false },
      { answerText: "font-family", isCorrect: false },
      { answerText: "text-style", isCorrect: false },
    ],
  },
  {
    questionText: "CSSda max-width nima uchun ishlatiladi?",
    answerOptions: [
      { answerText: "Maksimal kenglikni belgilash uchun", isCorrect: true },
      { answerText: "Minimal kenglikni belgilash uchun", isCorrect: false },
      { answerText: "Rangni o'zgartirish uchun", isCorrect: false },
      { answerText: "Element balandligini o'zgartirish uchun", isCorrect: false },
    ],
  },
];


const CssQuiz = () => {
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
              Quiz App Css
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

export default CssQuiz;
