
import './App.css';
import Main from './components/main/main';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Detail from './components/video_item_detail/detail';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:search" element={<Main />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
