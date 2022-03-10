
import './App.css';
import Main from './components/main/main';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Detail from './components/video_item_detail/detail';
import YouTube from './service/youtube';

function App() {
  const youtube = new YouTube;
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<Main  youtube = {youtube}/>} />
        <Route path="/:search" element={<Main youtube = {youtube}/>} />
        <Route path="/detail/:id" element={<Detail  youtube = {youtube}/>} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
