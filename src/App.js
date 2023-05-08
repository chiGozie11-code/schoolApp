import './App.css';
import Year from './componet/Year';
import Semster from './componet/Semster';
import Course from './componet/Course';
import Second from './componet/Second';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
      <div className="App">
        <Routes>
          {/* first Route */}
          <Route path='/' element={<Year/>}></Route>
          <Route path='level/:Id/:Name/get' element={<Semster/>}></Route>
          <Route path='semester/:Id/get' element={<Course/>}></Route>
          <Route path='Second' element={<Second/>}></Route>
          {/* stops here */}
        </Routes>
      </div>
  );
}

export default App;