import React, { useEffect, useState } from 'react';
import { useSearchParams } from "react-router-dom";
import BookCard from './BookCard';
import axios from 'axios';

function SearchResults() {
  let [searchParams] = useSearchParams();
  const [results, setResults] = useState([]);

  useEffect(() => {    
    axios.get(`https://openlibrary.org/search.json?q=${searchParams.get("title")}`).then((response) => {
      setResults(response.data.docs);
    });
  }, [searchParams]);

  if (!results.length) return <div>Loading...</div>;

  return (
    <div>
      <h2>Search Results</h2>
      <ul>
        {results.slice(0,10).map(bookDetails => (
          <BookCard book={bookDetails} key={bookDetails.key}/>
        )
        )}
      </ul>
    </div>
  );
}

export default SearchResults;