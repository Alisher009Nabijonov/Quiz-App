import React, { useState, useEffect } from "react";

const shuffle = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

const questions = [
  {
    questionText: "Frontend nima?",
    answerOptions: [
      { answerText: "Veb-saytning mijoz tomoni", isCorrect: true },
      { answerText: "Ma'lumotlar bazasi", isCorrect: false },
      { answerText: "Server tomoni", isCorrect: false },
      { answerText: "Havola yaratish texnologiyasi", isCorrect: false },
    ],
  },
  {
    questionText: "Frontendda qaysi texnologiyalar ishlatiladi?",
    answerOptions: [
      { answerText: "HTML, CSS, JavaScript", isCorrect: true },
      { answerText: "PHP, Ruby, Python", isCorrect: false },
      { answerText: "SQL, NoSQL, MongoDB", isCorrect: false },
      { answerText: "C++, Java, Kotlin", isCorrect: false },
    ],
  },
  {
    questionText: "HTML nima uchun ishlatiladi?",
    answerOptions: [
      { answerText: "Veb-saytning tuzilishini yaratish uchun", isCorrect: true },
      { answerText: "Styling qo'shish uchun", isCorrect: false },
      { answerText: "Ma'lumotlarni saqlash uchun", isCorrect: false },
      { answerText: "Interaktivlik qo'shish uchun", isCorrect: false },
    ],
  },
  {
    questionText: "CSS nima uchun ishlatiladi?",
    answerOptions: [
      { answerText: "Veb-sahifa dizaynini yaratish uchun", isCorrect: true },
      { answerText: "Ma'lumotlarni o'zgartirish uchun", isCorrect: false },
      { answerText: "Ma'lumotlar saqlash uchun", isCorrect: false },
      { answerText: "Server bilan aloqa qilish uchun", isCorrect: false },
    ],
  },
  {
    questionText: "JavaScript nima uchun ishlatiladi?",
    answerOptions: [
      { answerText: "Interaktivlik qo'shish uchun", isCorrect: true },
      { answerText: "Styling uchun", isCorrect: false },
      { answerText: "Veb-sayt tuzilishini yaratish uchun", isCorrect: false },
      { answerText: "Server tomoni dasturlash uchun", isCorrect: false },
    ],
  },
  {
    questionText: "Responsiv dizayn nima?",
    answerOptions: [
      { answerText: "Veb-sahifaning barcha ekranlarda yaxshi ko'rinishi", isCorrect: true },
      { answerText: "Sahifaning tezligi", isCorrect: false },
      { answerText: "Veb-saytning xavfsizligi", isCorrect: false },
      { answerText: "Ma'lumotlarni saqlash tizimi", isCorrect: false },
    ],
  },
  {
    questionText: "CSSda 'flexbox' nima?",
    answerOptions: [
      { answerText: "Elementlarni joylashuvi uchun model", isCorrect: true },
      { answerText: "Styling uchun kutubxona", isCorrect: false },
      { answerText: "Ma'lumotlar bazasi modeli", isCorrect: false },
      { answerText: "Server tomoni vositasi", isCorrect: false },
    ],
  },
  {
    questionText: "CSSda 'grid' nima?",
    answerOptions: [
      { answerText: "Elementlarni 2D joylashuvi uchun model", isCorrect: true },
      { answerText: "Brauzer uchun plugin", isCorrect: false },
      { answerText: "Interaktivlikni qo'shish texnologiyasi", isCorrect: false },
      { answerText: "HTML bilan ishlash kutubxonasi", isCorrect: false },
    ],
  },
  {
    questionText: "JavaScriptda DOM nima?",
    answerOptions: [
      { answerText: "Veb-sahifaning tuzilmasini boshqarish interfeysi", isCorrect: true },
      { answerText: "Styling modeli", isCorrect: false },
      { answerText: "Server bilan aloqa qilish texnologiyasi", isCorrect: false },
      { answerText: "Ma'lumotlarni saqlash vositasi", isCorrect: false },
    ],
  },
  {
    questionText: "Frontendda 'framework' nima?",
    answerOptions: [
      { answerText: "Oldindan tayyorlangan dasturiy muhit", isCorrect: true },
      { answerText: "Veb-sahifa uchun plugin", isCorrect: false },
      { answerText: "Ma'lumotlar saqlash formati", isCorrect: false },
      { answerText: "Veb-sayt uchun tarmoq vositasi", isCorrect: false },
    ],
  },
  {
    questionText: "Bootstrap nima?",
    answerOptions: [
      { answerText: "CSS uchun tayyorlangan framework", isCorrect: true },
      { answerText: "JavaScript kutubxonasi", isCorrect: false },
      { answerText: "Veb-server dasturi", isCorrect: false },
      { answerText: "Ma'lumotlar bazasi modeli", isCorrect: false },
    ],
  },
  {
    questionText: "Frontend dasturlash uchun eng mashhur kutubxona qaysi?",
    answerOptions: [
      { answerText: "React", isCorrect: true },
      { answerText: "Express", isCorrect: false },
      { answerText: "Node.js", isCorrect: false },
      { answerText: "Django", isCorrect: false },
    ],
  },
  {
    questionText: "Frontendda REST API nima uchun ishlatiladi?",
    answerOptions: [
      { answerText: "Server bilan ma'lumot almashish uchun", isCorrect: true },
      { answerText: "Stylingni boshqarish uchun", isCorrect: false },
      { answerText: "Veb-sayt xavfsizligini ta'minlash uchun", isCorrect: false },
      { answerText: "Ma'lumotlarni saqlash uchun", isCorrect: false },
    ],
  },
  {
    questionText: "Frontendda 'npm' nima uchun ishlatiladi?",
    answerOptions: [
      { answerText: "Kutubxonalarni boshqarish uchun", isCorrect: true },
      { answerText: "Serverni boshqarish uchun", isCorrect: false },
      { answerText: "Stylingni saqlash uchun", isCorrect: false },
      { answerText: "Ma'lumotlarni eksport qilish uchun", isCorrect: false },
    ],
  },
  {
    questionText: "Frontend dasturlashda 'webpack' nima?",
    answerOptions: [
      { answerText: "Modul birlashtiruvchi vosita", isCorrect: true },
      { answerText: "Styling kutubxonasi", isCorrect: false },
      { answerText: "Veb-sahifalarni hosting qilish platformasi", isCorrect: false },
      { answerText: "JavaScript framework", isCorrect: false },
    ],
  },
  {
    questionText: "CSSda 'media query' nima?",
    answerOptions: [
      { answerText: "Ekran hajmiga moslashuvni boshqarish", isCorrect: true },
      { answerText: "Veb-saytga API qo'shish", isCorrect: false },
      { answerText: "Ma'lumotlar almashinuvi vositasi", isCorrect: false },
      { answerText: "Komponentlarni boshqarish texnologiyasi", isCorrect: false },
    ],
  },
  {
    questionText: "Frontendda interaktivlik uchun nima ishlatiladi?",
    answerOptions: [
      { answerText: "JavaScript", isCorrect: true },
      { answerText: "HTML", isCorrect: false },
      { answerText: "CSS", isCorrect: false },
      { answerText: "SQL", isCorrect: false },
    ],
  },
  {
    questionText: "Frontendda 'performance optimization' nima uchun zarur?",
    answerOptions: [
      { answerText: "Veb-sayt tezligini oshirish uchun", isCorrect: true },
      { answerText: "Stylingni boshqarish uchun", isCorrect: false },
      { answerText: "Serverni boshqarish uchun", isCorrect: false },
      { answerText: "Ma'lumotlarni saqlash uchun", isCorrect: false },
    ],
  },
  {
    questionText: "CSSda 'z-index' nima uchun ishlatiladi?",
    answerOptions: [
      { answerText: "Elementlarning qatlam ustuvorligini belgilash uchun", isCorrect: true },
      { answerText: "Elementning kengligini belgilash uchun", isCorrect: false },
      { answerText: "Elementni joylashuvi", isCorrect: false },
      { answerText: "Elementning rangini boshqarish", isCorrect: false },
    ],
  },
  {
    questionText: "Frontend dasturlashda Lighthouse nima uchun ishlatiladi?",
    answerOptions: [
      { answerText: "Veb-saytni optimallashtirishni baholash", isCorrect: true },
      { answerText: "Ma'lumotlarni yuklash uchun", isCorrect: false },
      { answerText: "Stylingni boshqarish uchun", isCorrect: false },
      { answerText: "Veb-sayt xavfsizligini tekshirish", isCorrect: false },
    ],
  },
];

const FrontendQuiz = () => {
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
              Quiz App Front-end
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

export default FrontendQuiz;
