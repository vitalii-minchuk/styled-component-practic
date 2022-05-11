import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Card } from "./components/Card";
import { Controls } from "./components/Controls";
import { Header } from "./components/Header";
import { List } from "./components/List";
import { Main } from "./components/Main";
import { ALL_COUNTRIES } from "./config";
import { Details } from "./pages/Details";
import { HomePage } from "./pages/HomePage";
import { NotFound } from "./pages/NotFound";

function App() {
  const [countries, setCountries] = useState([])

  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route path="/"
            element={<HomePage countries={countries} setCountries={setCountries} />} />
          <Route path="/country/:name"  element={<Details />} />
          <Route path="*"  element={<NotFound />} />
        </Routes>
      </Main>
    </>
  );
}

export default App;
