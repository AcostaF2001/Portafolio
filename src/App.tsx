import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import {Aboutme} from "./pages/About";
import "./App.scss";
import Layout from "./components/Layout";
import 'bootstrap/dist/css/bootstrap.min.css';
import { TranslationProvider } from './context/TranslationContext'; // Importar el proveedor de traducción

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
