import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WelcomeScreen from "./Pages/WelcomeScreen";
import LogActivity from "./Pages/LogActivity";
import MyStats from "./Pages/MyStats";
import History from "./Pages/History";
import AppProvider from "./Context/AppContext";
import "./App.css";

const App = () => (
  <AppProvider>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<WelcomeScreen />} />
        <Route path="/log" element={<LogActivity />} />
        <Route path="/stats" element={<MyStats />} />
        <Route path="/history" element={<History />} />
      </Routes>
      <Footer />
    </Router>
  </AppProvider>
);

export default App;
