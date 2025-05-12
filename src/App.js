// import logo from './logo.svg';
// import './App.css';
// import Login from './components/pages/Login';
// import Register from './components/pages/Register';
// import Home from './components/pages/Home';
// import About from './components/pages/About';
// import Contact from './components/pages/Contact';

// function App() {
//   return (
//     // <Login/>
//     // <Header/>
//     // <Home/>
//      <About/>
//     // <Register/>
//   );
// }

// export default App;


import { BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Register from "./components/pages/Register";
import Login from "./components/pages/Login";
function App(){
  return(
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/about" element={<About/>}/>
         <Route path="/Contact" element={<Contact/>}/>
         <Route path="/Login" element={<Login/>}/>
         <Route path="/Register" element={<Register/>}/>
      </Routes>
    </BrowserRouter>
    
  );
}
export default App;
