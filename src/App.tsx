/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import PDP from "./pages/PDP";
import AIStylist from "./components/AIStylist";

export default function App() {
  return (
    <Router>
      <div className="flex min-h-screen flex-col bg-white font-sans selection:bg-zinc-900 selection:text-white">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<PDP />} />
        </Routes>
        <Footer />
        <AIStylist />
      </div>
    </Router>
  );
}
