import React from 'react';
import { Route, Routes } from "react-router-dom";
import NotFound from "../components/NotFound/NotFound";
import Header from "../components/Header/Header";
import Login from "../components/Login/Login";
// import { Counter } from '../features/counter/Counter';
import './App.css';
import Protected from "../Protected/Protected";
import AllCategory from "../components/AllCategory/AllCategory";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/logout" element={<Login />} />
        <Route path="*" element={<NotFound />} />

        <Route path="/" element={<Protected />}>
          <Route path="/" element={<AllCategory />} />
        </Route>
      </Routes>
      {/* <Aside /> */}
      {/* <Counter /> */}
      {/* <Login /> */}
      {/* <Header /> */}
      {/* <NotFound /> */}
    </div>
  );
}

export default App;
