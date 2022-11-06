import React from 'react';
import { Route, Routes } from "react-router-dom";
import NotFound from "../components/NotFound/NotFound";
import Header from "../components/Header/Header";
import Login from "../components/Login/Login";
// import { Counter } from '../features/counter/Counter';
import './App.css';
import Protected from "../Protected/Protected";
import Footer from "../components/Footer/Footer";
import Aside from "../components/Aside/Aside";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/logout" element={<Login />} />
        <Route path="*" element={<NotFound />} />

        <Route path="/" element={<Protected />}>
          <Route path="/" element={<Header />} />
          <Route path="/footer" element={<Footer />} />
        </Route>
      </Routes>
      <Aside />
      {/* <Counter /> */}
      {/* <Login /> */}
      {/* <Header /> */}
      {/* <NotFound /> */}
    </div>
  );
}

export default App;
