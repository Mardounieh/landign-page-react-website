import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home/Home";
import { Blog } from "./Pages/Blog/Blog";
import { Header } from "./Components/Header/Header";
import "./App.css";
import { useState, createContext } from "react";

export const SignUpContext = createContext();
function App() {
  const [signUpState, setSignUpState] = useState(false);
  return (
    <div
      className="flex flex-col items-center  
      bg-[radial-gradient(300%_130%_at_50%_-15%,rgb(50,100,134)_1%,rgba(0,0,0)_25%)]
      selection:text-cyan-700 selection:bg-cyan-300"
    >
      <SignUpContext.Provider value={{signUpState,setSignUpState}}>
        <Router>
          <Header />
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/blog"} element={<Blog />} />
          </Routes>
        </Router>
      </SignUpContext.Provider>
    </div>
  );
}

export default App;
