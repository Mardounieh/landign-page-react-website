import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Home } from './Pages/Home/Home';
import { Blog } from './Pages/Blog/Blog';

function App() {
  return (
    <div className="flex flex-col items-center h-screen bg-[radial-gradient(170%_150%_at_50%_1%,rgba(0,80,120)_1%,rgba(0,0,0)_40%)]">
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