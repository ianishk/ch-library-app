import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function BookDetails() {
  const { bookId } = useParams();
  const [bookData, setBookData] = useState(null);
  const [relatedBooks, setrelatedBooks] = useState([])

  useEffect(() => {
    axios.get(`https://openlibrary.org/works/${bookId}.json`).then((response) => {
      axios.get(`https://openlibrary.org${response?.data?.authors?.[0]?.author?.key}.json`).then(authorDetails => {
        response.data.authorName = authorDetails?.data?.name
        setBookData(response.data);
        axios.get(`https://openlibrary.org${response?.data?.authors?.[0]?.author?.key}/works.json`).then(relatedBookDetails => {
          setrelatedBooks(relatedBookDetails.data.entries)
        })
      })
    });
  }, [bookId]);

  if (!bookData) return <div>Loading...</div>;

  return (
    <div>
      <h2>{bookData.title}</h2>
      <p>Author: {bookData.authorName}</p>
      <img src={`https://covers.openlibrary.org/b/id/${bookData?.covers?.[0]}-L.jpg`} alt="Book Cover" />
      <p>{bookData.description}</p>
      <h2>Related books</h2>
      <div style={{display: 'flex', gap: '1rem', overflowX: 'scroll'}}>
        {relatedBooks.slice(0,5).map(relatedBook => {
          return(
            <div>
              <p>{relatedBook.title}</p>
              <img src={`https://covers.openlibrary.org/b/id/${relatedBook?.covers?.[0]}-M.jpg`} alt="loading" />
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default BookDetails;