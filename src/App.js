import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from 'react';

import Home from "./pages/Home";
import Navbar from "./component/Navbar/Navbar";
import Blog from "./pages/Blog";
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs/:blogId" element={<Blog />} />
        </Routes>
        {/* <Footer /> */}
      </Router>

    </div>
  );
}

export default App;
