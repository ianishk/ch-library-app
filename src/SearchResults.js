import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BookCard from './BookCard';
import axios from 'axios';

function SearchResults() {
  const { query } = useParams();
  const [results, setResults] = useState([]);

  useEffect(() => {
    
    axios.get(`https://openlibrary.org/search.json?q=${query}`).then((response) => {
      setResults(response.docs[0].seed);
      console.log(results);
    });
  }, [query]);

  return (
    <div>
      <h2>Search Results</h2>
      <ul>
        {results.slice(0,10).map((bookId) => (
          <BookCard bookId={bookId} />
        )
        )}
      </ul>
    </div>
  );
}

export default SearchResults;