import React from 'react';
import { Route, Routes } from "react-router-dom";
import NotFound from "../components/NotFound/NotFound";
import Login from "../components/Login/Login";
import Protected from "../Protected/Protected";
import MainPage from "../components/MainPage/MainPage";
import SinglePage from "../components/SinglePage/SinglePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Protected />}>
          <Route path="/" element={<MainPage />} />
          <Route path={`/:url`} element={<MainPage />} />
          <Route path={`/:url/:categoryId/:id`} element={<SinglePage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="/logout" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
