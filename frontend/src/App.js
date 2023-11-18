import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";

import Landing from "./landing/pages/Landing";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import Post from "./posts/pages/Post";
import AddPost from "./posts/pages/AddPost";

const App = () => {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/p1/posts" element={<Post />}></Route>
          <Route path="/post/new" element={<AddPost />}></Route>
        </Routes>
      </main>
    </Router>
  );
};

export default App;
