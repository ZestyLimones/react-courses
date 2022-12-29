import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Lesson from './pages/Lesson';
import './App.css';

function App() {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/lessons/:lessonId" element={<Lesson />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
