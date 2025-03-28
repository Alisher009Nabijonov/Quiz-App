import React, { useState, useEffect } from "react";

const shuffle = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

const questions = [
  {
    questionText: "JavaScript nima uchun ishlatiladi?",
    answerOptions: [
      { answerText: "Veb sahifani bezatish uchun", isCorrect: false },
      { answerText: "Dinamik funksiyalar qo'shish uchun", isCorrect: true },
      { answerText: "Ma'lumotlarni bazaga saqlash uchun", isCorrect: false },
      { answerText: "Serverni boshqarish uchun", isCorrect: false },
    ],
  },
  {
    questionText: "JavaScriptda o'zgaruvchini qanday e'lon qilish mumkin?",
    answerOptions: [
      { answerText: "var, let, const yordamida", isCorrect: true },
      { answerText: "function orqali", isCorrect: false },
      { answerText: "echo yordamida", isCorrect: false },
      { answerText: "class orqali", isCorrect: false },
    ],
  },
  {
    questionText: "JavaScriptda qaysi funksiyadan consolega ma'lumot chiqarish uchun foydalaniladi?",
    answerOptions: [
      { answerText: "console.show()", isCorrect: false },
      { answerText: "console.log()", isCorrect: true },
      { answerText: "console.print()", isCorrect: false },
      { answerText: "log.console()", isCorrect: false },
    ],
  },
  {
    questionText: "JavaScriptda qaysi ma'lumot turi mavjud emas?",
    answerOptions: [
      { answerText: "Number", isCorrect: false },
      { answerText: "Boolean", isCorrect: false },
      { answerText: "Character", isCorrect: true },
      { answerText: "Object", isCorrect: false },
    ],
  },
  {
    questionText: "JavaScriptda massivni qaysi usul bilan uzunligini topish mumkin?",
    answerOptions: [
      { answerText: "array.size", isCorrect: false },
      { answerText: "array.length", isCorrect: true },
      { answerText: "array.count", isCorrect: false },
      { answerText: "array.index", isCorrect: false },
    ],
  },
  {
    questionText: "JavaScriptda funksiyani qanday e'lon qilamiz?",
    answerOptions: [
      { answerText: "function myFunction() {}", isCorrect: true },
      { answerText: "def myFunction() {}", isCorrect: false },
      { answerText: "fun myFunction() {}", isCorrect: false },
      { answerText: "func myFunction() {}", isCorrect: false },
    ],
  },
  {
    questionText: "JavaScriptda '===' operatori nimani anglatadi?",
    answerOptions: [
      { answerText: "Faqat qiymatlarni tekshiradi", isCorrect: false },
      { answerText: "Qiymat va turini tekshiradi", isCorrect: true },
      { answerText: "Faqat ma'lumot turini tekshiradi", isCorrect: false },
      { answerText: "Qiymatlarni qo'shish uchun ishlatiladi", isCorrect: false },
    ],
  },
  {
    questionText: "JavaScriptda qaysi ma'lumot turi 'null' deb ataladi?",
    answerOptions: [
      { answerText: "Null qiymatga ega bo'lgan obyekt", isCorrect: false },
      { answerText: "Hech qanday qiymatni ifodalovchi tur", isCorrect: true },
      { answerText: "Noto'g'ri ma'lumot turi", isCorrect: false },
      { answerText: "Bo'sh string", isCorrect: false },
    ],
  },
  {
    questionText: "JavaScriptda 'let' va 'var' o'rtasidagi farq nima?",
    answerOptions: [
      { answerText: "let faqat stringlar bilan ishlatiladi", isCorrect: false },
      { answerText: "let blok darajasida, var esa funksiya darajasida e'lon qilinadi", isCorrect: true },
      { answerText: "let faqat obyektlar bilan ishlaydi", isCorrect: false },
      { answerText: "Farqi yo'q, ikkalasi bir xil", isCorrect: false },
    ],
  },
  {
    questionText: "JavaScriptda callback nima?",
    answerOptions: [
      { answerText: "Obyektni e'lon qilishning maxsus usuli", isCorrect: false },
      { answerText: "Funksiya boshqa funksiya argumenti sifatida o'tkazilishi", isCorrect: true },
      { answerText: "O'zgaruvchi o'zini qayta chaqirish", isCorrect: false },
      { answerText: "Ma'lumotlarni formatlash usuli", isCorrect: false },
    ],
  },
  {
    questionText: "JavaScriptda DOM nima uchun ishlatiladi?",
    answerOptions: [
      { answerText: "HTML elementlari bilan ishlash uchun", isCorrect: true },
      { answerText: "Ma'lumotlarni bazaga saqlash uchun", isCorrect: false },
      { answerText: "JavaScript fayllarini ulash uchun", isCorrect: false },
      { answerText: "Serverdan ma'lumot olish uchun", isCorrect: false },
    ],
  },
  {
    questionText: "JavaScriptda qaysi usul massiv oxiriga element qo'shadi?",
    answerOptions: [
      { answerText: "array.pop()", isCorrect: false },
      { answerText: "array.push()", isCorrect: true },
      { answerText: "array.shift()", isCorrect: false },
      { answerText: "array.add()", isCorrect: false },
    ],
  },
  {
    questionText: "JavaScriptda qanday qilib vaqtni kechiktirish mumkin?",
    answerOptions: [
      { answerText: "setInterval()", isCorrect: false },
      { answerText: "setTimeout()", isCorrect: true },
      { answerText: "delay()", isCorrect: false },
      { answerText: "timeDelay()", isCorrect: false },
    ],
  },
  {
    questionText: "JavaScriptda async/await nima uchun ishlatiladi?",
    answerOptions: [
      { answerText: "Obyekt yaratish uchun", isCorrect: false },
      { answerText: "Asinxron operatsiyalarni boshqarish uchun", isCorrect: true },
      { answerText: "Massivlar ustida amallar bajarish uchun", isCorrect: false },
      { answerText: "Fayl yuklash uchun", isCorrect: false },
    ],
  },
  {
    questionText: "JavaScriptda qanday qilib obyektning xossasini qo'shish mumkin?",
    answerOptions: [
      { answerText: "object.property = value", isCorrect: true },
      { answerText: "object->property = value", isCorrect: false },
      { answerText: "object.setProperty(value)", isCorrect: false },
      { answerText: "object.add(value)", isCorrect: false },
    ],
  },
  {
    questionText: "JavaScriptda qaysi operator funksiyani chaqirish uchun ishlatiladi?",
    answerOptions: [
      { answerText: "()", isCorrect: true },
      { answerText: "[]", isCorrect: false },
      { answerText: "{}", isCorrect: false },
      { answerText: "<>", isCorrect: false },
    ],
  },
  {
    questionText: "JavaScriptda qaysi metod satr uzunligini qaytaradi?",
    answerOptions: [
      { answerText: "string.size()", isCorrect: false },
      { answerText: "string.length", isCorrect: true },
      { answerText: "string.count()", isCorrect: false },
      { answerText: "string.index()", isCorrect: false },
    ],
  },
  {
    questionText: "JavaScriptda 'this' kalit so'zi nimani bildiradi?",
    answerOptions: [
      { answerText: "Hozirgi funksiyadagi obyektni", isCorrect: true },
      { answerText: "Hozirgi faylni", isCorrect: false },
      { answerText: "Global o'zgaruvchini", isCorrect: false },
      { answerText: "HTML sahifani", isCorrect: false },
    ],
  },
  {
    questionText: "JavaScriptda qaysi metod satrni kichik harflarga o'zgartiradi?",
    answerOptions: [
      { answerText: "toLowerCase()", isCorrect: true },
      { answerText: "toSmallCase()", isCorrect: false },
      { answerText: "convertToLower()", isCorrect: false },
      { answerText: "lowerCase()", isCorrect: false },
    ],
  },
  {
    questionText: "JavaScriptda 'event' nimani anglatadi?",
    answerOptions: [
      { answerText: "Veb-sahifada ro'y beradigan hodisani", isCorrect: true },
      { answerText: "Ma'lumotlar bazasiga yozuvni", isCorrect: false },
      { answerText: "Brauzer keshini tozalashni", isCorrect: false },
      { answerText: "Global o'zgaruvchini", isCorrect: false },
    ],
  },
];

const JsQuiz = () => {
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
              Quiz App JavaScript
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

export default JsQuiz;
