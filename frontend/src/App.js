import './App.css';
import FlatDetail from "./components/FlatDetail"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Contact from "./components/Contact"
import About from "./components/About"
import Blog from "./components/Blog"
import BlogDetail from "./components/BlogDetail"
import {BrowserRouter as Router,Route} from "react-router-dom";
import Login from './components/Login';
// import Signup from './components/SignUp';
import Profile from './components/Profile';

 

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Route path="/" exact component={Home}></Route>
        <Route path="/contact"  component={Contact}></Route>
        <Route path="/about"  component={About}></Route>
        <Route path="/blog" exact component={Blog}></Route>
        <Route path="/profile" exact component={Profile}></Route>
        <Route path="/blog/:id"  component={BlogDetail}></Route>
        <Route path="/login" component={Login}></Route>
        {/* <Route path="/signup" component={Signup}></Route> */}
        <Route path="/flat/:slug"  component={FlatDetail}></Route>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
