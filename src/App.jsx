import React from "react";
import "./App.css"
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
// Components
import HtmlQuiz from "./Componets/HtmlQuiz";
import CssQuiz from "./Componets/CssQuiz";
import JsQuiz from "./Componets/JsQuiz";
import ReactQuiz from "./Componets/ReactQuiz";
import FrontendQuiz from "./Componets/FrontendQuiz";

// Pages
import HomeNavbar from "./Pages/HomeNavbar";
// import Nav from "./Pages/nav";
const App = () => {

  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<HomeNavbar/>}>
       <Route path="/" element={<HtmlQuiz/>}/>
       <Route path="/cssquiz" element={<CssQuiz/>}/>
       <Route path="/jsquiz" element={<JsQuiz/>}/>
       <Route path="/reactquiz" element={<ReactQuiz/>}/>
       <Route path="/frontendquiz" element={<FrontendQuiz/>}/>
      </Route>
    )
  )
  return (
    <div className="">
      <RouterProvider router={routes} />
    </div>
  );
};

export default App;
