import './App.css';
import FlatDetail from "./components/FlatDetail"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./components/Home"
import About from "./components/About"
import Blog from "./components/Blog"
import BlogDetail from "./components/BlogDetail"
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './components/Login';
import Profile from './components/Profile';
import PostAccommodo from "./components/PostAccommodo"
// import Signup from './components/SignUp';
// import Contact from "./components/Contact"



function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route path="/" exact component={Home}></Route>
        <Route path="/postaccommodo" component={PostAccommodo}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/blog" exact component={Blog}></Route>
        <Route path="/profile" exact component={Profile}></Route>
        <Route path="/blog/:id" component={BlogDetail}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/flat/:slug" component={FlatDetail}></Route>
        {/* <Route path="/signup" component={Signup}></Route> */}
        {/* <Route path="/contact"  component={Contact}></Route> */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
