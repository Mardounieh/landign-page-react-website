import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Home } from './Pages/Home/Home';
import { Blog } from './Pages/Blog/Blog';

function App() {
  return (
    <div className="flex flex-col gap-32 items-center  
      bg-[radial-gradient(300%_150%_at_50%_-10%,rgb(50,100,134)_1%,rgba(0,0,0)_25%)]
      selection:text-cyan-700 selection:bg-cyan-300">
      <Router>
        <Routes>
          <Route path={"/"} element={<Home/>}/>
          <Route path={"/blog"} element={<Blog/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;