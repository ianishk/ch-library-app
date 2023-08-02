import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import BookDetails from './BookDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<SearchBar/>} />
        <Route exact path="/search" element={<SearchResults/>} />
        <Route exact path="/book/works/:bookId"  element={<BookDetails/>} />
      </Routes>
    </Router>
  );
}
export default App;