import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import RelatedBooks from './RelatedBooks';

function BookDetails() {
  const { bookId } = useParams();
  const [bookData, setBookData] = useState(null);

  useEffect(() => {
    // Fetch data using Open Library API
    axios.get(`https://openlibrary.org${bookId}.json`).then((response) => {
      setBookData(response.data);
    });
  }, [bookId]);

  if (!bookData) return <div>Loading...</div>;

  return (
    <div>
      <h2>{bookData.title}</h2>
      <p>Author: {bookData.author_name?.join(', ')}</p>
      <img src={`https://covers.openlibrary.org/b/id/${bookData.cover_i}-L.jpg`} alt="Book Cover" />
      {/* Show other book details from the bookData object */}
      <RelatedBooks author={bookData.author_name[0]} />
    </div>
  );
}

export default BookDetails;