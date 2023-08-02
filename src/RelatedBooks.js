import React, { useEffect, useState } from 'react';
import axios from 'axios';

function RelatedBooks({ author }) {
  const [relatedBooks, setRelatedBooks] = useState([]);

  useEffect(() => {
    // Fetch data using Open Library API
    axios.get(`https://openlibrary.org/search.json?author=${author}`).then((response) => {
      setRelatedBooks(response.data.docs);
    });
  }, [author]);

  return (
    <div>
      <h3>Related Books by {author}</h3>
      <ul>
        {relatedBooks.map((book) => (
          <li key={book.key}>
            <a href={`/book/${book.key}`}>{book.title}</a> - {book.author_name?.join(', ')}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RelatedBooks;