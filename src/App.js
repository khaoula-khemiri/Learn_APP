

import ProgrBar from './components/ProgressBar';
import CheckQuestion from './pages/CheckQuestion';
import Home from './pages/Home';
import Intro from './pages/Intro';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import DragQuestion from './pages/DragQuestion';
import Outro from './pages/Outro';
import Conclusion from './pages/Conclusion';
import InputQuestion from './pages/InputQuestion';
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Advice from './pages/Advice';

function App() {
  return (
    <Router>
      <Routes  >
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Intro" element={<Intro />} />
        <Route exact path="/CheckQuestion/:id" element={<CheckQuestion />} />
        <Route exact path="/DragQuestion/:id" element={<DragQuestion />} />
        <Route exact path="/Advice" element={<Advice />} />
        <Route exact path="/InputQuestion/:id" element={<InputQuestion/>} />
        <Route exact path="/Conclusion" element={ <Conclusion />} />
        <Route exact path="/Outro" element={ <Outro/>} />
      </Routes>
    </Router>
  );
}

export default App;
