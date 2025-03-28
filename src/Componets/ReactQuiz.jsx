import React, { useState, useEffect } from "react";

const shuffle = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

const questions = [
  {
    questionText: "React nima?",
    answerOptions: [
      { answerText: "Server tomonida ishlatiladigan ramka", isCorrect: false },
      { answerText: "Frontend uchun JavaScript kutubxonasi", isCorrect: true },
      { answerText: "Ma'lumotlar bazasi boshqaruv tizimi", isCorrect: false },
      { answerText: "Veb-saytlarni hosting qilish platformasi", isCorrect: false },
    ],
  },
  {
    questionText: "Reactda komponentlar qanday turlarga bo'linadi?",
    answerOptions: [
      { answerText: "Funktsional va Klass komponentlar", isCorrect: true },
      { answerText: "Dinamik va Statik komponentlar", isCorrect: false },
      { answerText: "Oddiy va Murakkab komponentlar", isCorrect: false },
      { answerText: "Frontend va Backend komponentlar", isCorrect: false },
    ],
  },
  {
    questionText: "Reactda 'state' nima uchun ishlatiladi?",
    answerOptions: [
      { answerText: "Komponent holatini boshqarish uchun", isCorrect: true },
      { answerText: "Styling uchun", isCorrect: false },
      { answerText: "Ma'lumotlarni serverga yuborish uchun", isCorrect: false },
      { answerText: "Komponentlar o'rtasida aloqa o'rnatish uchun", isCorrect: false },
    ],
  },
  {
    questionText: "Reactda 'props' nima?",
    answerOptions: [
      { answerText: "Komponentning o'zgaruvchi qiymatlari", isCorrect: false },
      { answerText: "Komponentga tashqaridan o'tkaziladigan ma'lumotlar", isCorrect: true },
      { answerText: "Komponentning DOM bilan ishlash usullari", isCorrect: false },
      { answerText: "Styling ma'lumotlari", isCorrect: false },
    ],
  },
  {
    questionText: "Reactda 'useState' hooki nima qiladi?",
    answerOptions: [
      { answerText: "Styling o'zgartirish uchun", isCorrect: false },
      { answerText: "Komponentning holatini boshqarish uchun", isCorrect: true },
      { answerText: "Komponentlar orasidagi aloqa uchun", isCorrect: false },
      { answerText: "Komponentni DOMga joylashtirish uchun", isCorrect: false },
    ],
  },
  {
    questionText: "Reactda 'useEffect' hooki qachon ishlatiladi?",
    answerOptions: [
      { answerText: "Komponent har safar render bo'lganda yon ta'sirlarni boshqarish uchun", isCorrect: true },
      { answerText: "Styling uchun", isCorrect: false },
      { answerText: "Faol holatlarni o'zgartirish uchun", isCorrect: false },
      { answerText: "Komponent DOMdan o'chirilganda", isCorrect: false },
    ],
  },
  {
    questionText: "Reactda 'key' props nima uchun ishlatiladi?",
    answerOptions: [
      { answerText: "Komponentlarga styling qo'shish uchun", isCorrect: false },
      { answerText: "Elementlarning unikal identifikatori uchun", isCorrect: true },
      { answerText: "Ma'lumotlarni serverga yuborish uchun", isCorrect: false },
      { answerText: "Komponentning render tezligini oshirish uchun", isCorrect: false },
    ],
  },
  {
    questionText: "Reactda 'virtual DOM' nima?",
    answerOptions: [
      { answerText: "Brauzerning asosiy DOMi", isCorrect: false },
      { answerText: "Realdagi DOMning yengil versiyasi", isCorrect: true },
      { answerText: "Server tarafidagi DOM", isCorrect: false },
      { answerText: "DOMni animatsiya qilish kutubxonasi", isCorrect: false },
    ],
  },
  {
    questionText: "React komponentlarida JSX nima?",
    answerOptions: [
      { answerText: "CSSning yangi versiyasi", isCorrect: false },
      { answerText: "JavaScript va HTML aralashmasi", isCorrect: true },
      { answerText: "Server tomonida ishlatiladigan til", isCorrect: false },
      { answerText: "Ma'lumotlarni saqlash formati", isCorrect: false },
    ],
  },
  {
    questionText: "Reactda Context API nima uchun ishlatiladi?",
    answerOptions: [
      { answerText: "Komponentlar o'rtasida ma'lumot ulashish uchun", isCorrect: true },
      { answerText: "Stylingni qo'llash uchun", isCorrect: false },
      { answerText: "Ma'lumotlarni serverga saqlash uchun", isCorrect: false },
      { answerText: "Komponentlarni DOMga qo'shish uchun", isCorrect: false },
    ],
  },
  {
    questionText: "Reactda 'Fragments' nima uchun ishlatiladi?",
    answerOptions: [
      { answerText: "Ma'lumotlarni filtrlash uchun", isCorrect: false },
      { answerText: "DOMda qo'shimcha elementlar qo'shmasdan guruhlash uchun", isCorrect: true },
      { answerText: "Stylingni boshqarish uchun", isCorrect: false },
      { answerText: "Komponentlarni birlashtirish uchun", isCorrect: false },
    ],
  },
  {
    questionText: "Reactda komponentlar ichida qaysi hook ishlatiladi?",
    answerOptions: [
      { answerText: "useState", isCorrect: true },
      { answerText: "setInterval", isCorrect: false },
      { answerText: "querySelector", isCorrect: false },
      { answerText: "addEventListener", isCorrect: false },
    ],
  },
  {
    questionText: "Reactda komponentlar qanday render qilinadi?",
    answerOptions: [
      { answerText: "Static render orqali", isCorrect: false },
      { answerText: "Virtual DOM orqali", isCorrect: true },
      { answerText: "Serverdan yuklanadi", isCorrect: false },
      { answerText: "HTML fayllar orqali", isCorrect: false },
    ],
  },
  {
    questionText: "Reactda routingni boshqarish uchun nima ishlatiladi?",
    answerOptions: [
      { answerText: "React Router", isCorrect: true },
      { answerText: "React Navigation", isCorrect: false },
      { answerText: "React Route", isCorrect: false },
      { answerText: "React Path", isCorrect: false },
    ],
  },
  {
    questionText: "Reactda Redux nima uchun ishlatiladi?",
    answerOptions: [
      { answerText: "Komponentlar orasida holat boshqaruvi uchun", isCorrect: true },
      { answerText: "Stylingni boshqarish uchun", isCorrect: false },
      { answerText: "Routingni boshqarish uchun", isCorrect: false },
      { answerText: "DOMni yangilash uchun", isCorrect: false },
    ],
  },
  {
    questionText: "Reactda default props qanday o'rnatiladi?",
    answerOptions: [
      { answerText: "component.defaultProps", isCorrect: true },
      { answerText: "component.props", isCorrect: false },
      { answerText: "component.styles", isCorrect: false },
      { answerText: "component.state", isCorrect: false },
    ],
  },
  {
    questionText: "Reactda qaysi hook global holatlarni boshqaradi?",
    answerOptions: [
      { answerText: "useReducer", isCorrect: true },
      { answerText: "useState", isCorrect: false },
      { answerText: "useEffect", isCorrect: false },
      { answerText: "useContext", isCorrect: false },
    ],
  },
  {
    questionText: "Reactni kim yaratgan?",
    answerOptions: [
      { answerText: "Google", isCorrect: false },
      { answerText: "Facebook (Meta)", isCorrect: true },
      { answerText: "Twitter", isCorrect: false },
      { answerText: "Microsoft", isCorrect: false },
    ],
  },
  {
    questionText: "React komponentlari qaysi ma'lumot formatini qaytaradi?",
    answerOptions: [
      { answerText: "HTML", isCorrect: false },
      { answerText: "JSX", isCorrect: true },
      { answerText: "CSS", isCorrect: false },
      { answerText: "XML", isCorrect: false },
    ],
  },
  {
    questionText: "Reactda 'strict mode' nima qiladi?",
    answerOptions: [
      { answerText: "Stylingni tekshiradi", isCorrect: false },
      { answerText: "Koddagi xatolarni aniqlaydi", isCorrect: true },
      { answerText: "Ruxsatlarni boshqaradi", isCorrect: false },
      { answerText: "DOMni yangilaydi", isCorrect: false },
    ],
  },
];

const ReactQuiz = () => {
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
              Quiz App ReactJS
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

export default ReactQuiz;
