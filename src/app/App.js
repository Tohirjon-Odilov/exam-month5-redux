import React from 'react';
import { Route, Routes } from "react-router-dom";
import NotFound from "../components/NotFound/NotFound";
import Login from "../components/Login/Login";
import Protected from "../Protected/Protected";
import MainPage from "../components/MainPage/MainPage";
import { useSelector } from "react-redux";
import SinglePage from "../components/SinglePage/SinglePage";

function App() {
  const { cates } = useSelector((state) => state.generalData)

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Protected />}>
          {/* <Route path="/" element={<MainPage />} /> */}
          <Route path={`/${cates}`} element={<MainPage />} />
          <Route path={`${cates}/:categoryId/:id`} element={<SinglePage />} />
        </Route>
        <Route path="/logout" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
