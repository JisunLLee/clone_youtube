
import './App.css';
import Main from './components/main/main';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Detail from './components/video_item_detail/detail';
import SearchHeader from './components/search_header/searchHeader';
import { memo } from 'react';

const App = memo(({youtube}) => {

  return (
    <Router>
      <SearchHeader />
      <Routes>
        <Route path="/" element={<Main  youtube = {youtube}/>} />
        <Route path="/:search" element={<Main youtube = {youtube}/>} />
        <Route path="/detail/:id" element={<Detail  youtube = {youtube}/>} />
      </Routes>
    </Router>
  );
})

export default App;
