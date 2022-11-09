import React from 'react';
import { Route, Routes, useParams } from "react-router-dom";
import NotFound from "../components/NotFound/NotFound";
import Login from "../components/Login/Login";
import Protected from "../Protected/Protected";
import MainPage from "../components/MainPage/MainPage";
import { useSelector } from "react-redux";
import SinglePage from "../components/SinglePage/SinglePage";
import Page from "../components/SinglePage/Page";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function App() {
  // console.log(useParams());
  const { cates, allDatas } = useSelector((state) => state.generalData)
  // allDatas
  // console.log('app: ', allDatas.length > 0 && allDatas[0].title);

  // cates
  // console.log('cates: ', cates);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Protected />}>
          <Route path={`${cates}`} element={<MainPage />} />
          <Route path={`${cates}/:categoryId/:id`} element={<SinglePage />} />
        </Route>
        <Route path="/logout" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
