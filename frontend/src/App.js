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
import References from './components/References';
import Signup from './components/SignUp';
// import Contact from "./components/Contact"
import { AuthProvider } from './components/AuthContext';


function App() {
  return (
    <Router>
      <div className="App">
        <AuthProvider>
          <Header />
          <Route path="/" exact component={Home}></Route>
          <Route path="/postaccommodo" component={PostAccommodo}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/shortlisted" exact component={Blog}></Route>
          <AuthProvider><Route path="/profile" exact component={Profile}></Route></AuthProvider>
          <Route path="/blog/:id" component={BlogDetail}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/accommododetails/:slug" component={FlatDetail}></Route>
          <Route path="/signup" component={Signup}></Route>
          {/* <Route path="/contact"  component={Contact}></Route> */}
          <Route path="/contact" component={References}></Route>
          <Footer />
        </AuthProvider>
      </div>
    </Router>
  );
}

export default App;
